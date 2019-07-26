import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KeywordService {

  constructor(private http: HttpClient) { }

  getKeyword() {
    const options = {
      command: 'getdocuments',
      uid: 'nakul27@gmail.com'
    };
    return this.http.post('http://thinkterns.com/gaap/action.php', options);
  }

  addKeyword(options: any) {
    return this.http.post('http://thinkterns.com/gaap/action.php', options);
  }
}
