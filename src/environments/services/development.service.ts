import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

  constructor() { }

  public log(title, data) {
    setTimeout(console.log.bind(console, '%c[LOG]%c [' + title + '] => ' + JSON.stringify(data), 'color:green;font-size: 16px;', ''));
  }

  public elog(title, data) {
    setTimeout(console.log.bind(console, '%c[ERROR]%c [' + title + '] => ' + JSON.stringify(data), 'color:red;font-size: 16px;', ''));
  }
}
