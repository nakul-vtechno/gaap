import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, switchMap  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KeywordsService {

  private userKeywords: Array<{}> = [];

  constructor(private http: HttpClient) { }

  public getKeywords() {
    return this.userKeywords;
  }

  public setKeywords(userKeywords) {
    this.userKeywords = userKeywords;
  }

  public getUserKeywords(userName) {
    const URL = 'http://localhost:3000/';
    this.http.get<any>(`${URL}keyword/${userName}`).subscribe((res) => {
      console.log('GET Keywords => ', res);
      this.userKeywords = res;
    });
  }

  public deleteKeyword(keywordId) {
    const URL = 'http://localhost:3000/';
    this.http.delete<any>(`${URL}keyword/${keywordId}`).subscribe((res) => {
      console.log('DELETE Keywords => ', res);
    });
  }
}
