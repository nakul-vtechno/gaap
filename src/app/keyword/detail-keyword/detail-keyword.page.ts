import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-detail-keyword',
  templateUrl: './detail-keyword.page.html',
  styleUrls: ['./detail-keyword.page.scss'],
})
export class DetailKeywordPage implements OnInit {
  keywordId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      console.log('id : ', id);
    });
  }

}
