import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-keywords-list',
  templateUrl: './keywords-list.component.html',
  styleUrls: ['./keywords-list.component.scss'],
})
export class KeywordsListComponent implements OnInit {
  @Input() keywords:Array<{}>;

  constructor() { }

  ngOnInit() {
    console.log("KeyWords : ",this.keywords);
  }

}
