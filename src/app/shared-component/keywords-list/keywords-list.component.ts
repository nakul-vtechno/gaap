import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keywords-list',
  templateUrl: './keywords-list.component.html',
  styleUrls: ['./keywords-list.component.scss'],
})
export class KeywordsListComponent implements OnInit {
  @Input() keywords: Array<{}>;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('KeyWords : ', this.keywords);
    this.keywords = [...this.keywords];
  }

  openDetail(keyword: any) {
    this.router.navigateByUrl(`detail-keyword/${keyword.id}`);
  }

  swipeSlider(event: any, slider: any) {
    slider.open();
    slider.getSlidingRatio().then((ratio: number) => {
      if (ratio > 0) {
        slider.close();
      }
    });
    event.stopPropagation();
  }

  delete(slider, keyword: any) {
    slider.close();
    console.log('keyword :', keyword);
  }

  edit(slider, keyword: any) {
    slider.close();
    this.router.navigateByUrl('/edit-keyword');
  }

  send(slider, keyword: any) {
    slider.close();
    console.log('send :', keyword);
  }

  receive(slider, keyword: any) {
    slider.close();
    console.log('receive :', keyword);
  }

}
