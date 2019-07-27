import { Component, OnInit } from '@angular/core';
import { KeywordService } from './keyword.service';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.page.html',
  styleUrls: ['./keyword.page.scss'],
})
export class KeywordPage implements OnInit {

  public keywords: Array<{}>;

  constructor(private api: KeywordService) { }

  ngOnInit() {
    this.getKeyword();
    this.keywords = [
      {
        name:'Mega Man X',
        id:'1'
      },
      {
        name:'Pac-Man',
        id:'1'
      },
      {
        name:'hello',
        id:'1'
      },
    ]
  }

  getKeyword() {
    this.api.getKeyword().subscribe((resData) => {
      console.log('Get Keywords :: ', resData);
    });
  }

}
