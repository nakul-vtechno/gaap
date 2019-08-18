import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Plugins } from '@capacitor/core';

import { environment } from '../../environments/environment';
import { User } from './model/user.model';

import { UserService } from '../services/user.service';
import { KeywordsService } from '../services/keywords.service';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  localId: string;
  expiresIn: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnDestroy {

  private _user = new BehaviorSubject<User>(null);
  private activeLogoutTimer: any;

  constructor(
    private http: HttpClient,
    public Keywords: KeywordsService,
    public UserDetails: UserService) { }

  get userIsAuthenticated() {
    console.log('UserService.userData autoLogin');
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return !!user.token;
        } else {
          return false;
        }
      })
    );
  }

  get userId() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.id;
        } else {
          return null;
        }
      })
    );
  }

  get userEmail() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.email;
        } else {
          return null;
        }
      })
    );
  }

  get token() {
    return this._user.asObservable().pipe(
      map(user => {
        if (user) {
          return user.token;
        } else {
          return null;
        }
      })
    );
  }

  autoLogin() {
    this.Keywords.getUserKeywords(this.UserDetails.getUserData().email);
    return from(Plugins.Storage.get({ key: 'authData' }))
      .pipe(
        map(storedData => {
          if (!storedData || !storedData.value) {
            return null;
          }
          const parsedData = JSON.parse(storedData.value) as {
            token: string;
            tokenExpirationDate: string;
            userId: string;
            email: string;
          };
          const expirationTime = new Date(parsedData.tokenExpirationDate);
          if (expirationTime <= new Date()) {
            return null;
          }
          const user = new User(
            parsedData.userId,
            parsedData.email,
            parsedData.token,
            expirationTime
          );
          return user;
        }),
        tap(user => {
          if (user) {
            this._user.next(user);
            this.autoLogout(user.tokenDuration);
          }
        }),
        map(user => {
          return !!user;
        })
      );
  }

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${
        environment.firebaseAPIKey
        }`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${
        environment.firebaseAPIKey
        }`,
        {
          email: email,
          password: password,
          returnSecureToken: true
        }
      )
      .pipe(tap(this.setUserData.bind(this)));
  }

  logout() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this._user.next(null);
    Plugins.Storage.remove({ key: 'authData' });
  }

  private autoLogout(duration: number) {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
    this.activeLogoutTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  private setUserData(userData: AuthResponseData) {
    const expirationTime = new Date(
      new Date().getTime() + +userData.expiresIn * 1000
    );
    const user = new User(
      userData.localId,
      userData.email,
      userData.idToken,
      expirationTime
    );
    this._user.next(user);
    this.autoLogout(user.tokenDuration);
    this.storeAuthData(
      userData.localId,
      userData.idToken,
      expirationTime.toISOString(),
      userData.email
    );
    this.UserDetails.setUserDatas(userData);
    this.Keywords.getUserKeywords(this.UserDetails.getUserData().email);
    console.log('UserService.userData => ', this.UserDetails.getUserData());
  }

  private storeAuthData(
    userId: string,
    token: string,
    tokenExpirationDate: string,
    email: string
  ) {
    const data = JSON.stringify({
      userId: userId,
      token: token,
      tokenExpirationDate: tokenExpirationDate,
      email: email
    });
    Plugins.Storage.set({ key: 'authData', value: data });
  }

  ngOnDestroy() {
    if (this.activeLogoutTimer) {
      clearTimeout(this.activeLogoutTimer);
    }
  }

}
