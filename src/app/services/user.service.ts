import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDetails;

  constructor() { }

  public getUserData() {
    return this.userDetails;
  }

  public setUserDatas(userDetails) {
    this.userDetails = userDetails;
  }
}
