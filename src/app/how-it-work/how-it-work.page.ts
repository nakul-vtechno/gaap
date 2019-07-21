import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-work',
  templateUrl: './how-it-work.page.html',
  styleUrls: ['./how-it-work.page.scss'],
})
export class HowItWorkPage implements OnInit {

  // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
  public slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
