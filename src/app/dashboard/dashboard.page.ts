import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public keywords:Array<{}>;

  constructor() { }

  ngOnInit() {
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

}
