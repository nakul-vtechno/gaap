import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('AuthInterceptor : ');

    from(Plugins.Storage.get({ key: 'authData' }))
      .pipe(
        map(storedData => {
          console.log('interceptor : ',storedData)
          if (!storedData || !storedData.value) {
            return null;
          }
          const parsedData = JSON.parse(storedData.value) as {
            token: string;
            tokenExpirationDate: string;
            userId: string;
            email: string;
          };


          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${parsedData.token}`
            }
          });

        }),
      );


    return next.handle(request);
  }
}
