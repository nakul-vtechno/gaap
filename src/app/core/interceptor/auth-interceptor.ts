import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    Storage.get({ key: 'authData' })
    .then((res) => {
      const parsedData = JSON.parse(res.value);
      if (parsedData) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${parsedData.token}`
          }
        });
      }
    }).catch((err) => {
      console.log("autth Error ",err);
    });

    return next.handle(request);
  }

}
