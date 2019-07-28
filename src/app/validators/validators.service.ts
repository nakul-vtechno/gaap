import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { Observable, timer } from 'rxjs';
import { map, switchMap  } from 'rxjs/operators';

// const URL = 'https://jsonplaceholder.typicode.com';
// Example : https://stackblitz.com/edit/angular-reactive-forms-async-validator
const DemoKeyword = ['ABC', 'TEST', 'DLF', 'HELLO'];

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  constructor(private http: HttpClient) {}

  searchKeyword(text: string) {
    // debounce
    return timer()
      .pipe(
        switchMap(() => {
          // Check if Keyword is available
          // return this.http.get<any>(`${URL}/users?username=${text}`);
          if (DemoKeyword.indexOf(text.toUpperCase()) === -1) {
            return [];
          } else {
            return [text];
          }
        })
      );
  }

  keywordValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchKeyword(control.value)
        .pipe(
          map(res => {
            // if keyword is already taken
            if (res.length) {
              // return error
              return { keywordExists: true};
            }
          })
        );
    };
  }

}

