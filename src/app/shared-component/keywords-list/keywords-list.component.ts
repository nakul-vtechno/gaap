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
    console.log('KeyWords : ' , this.keywords);
  }

  swipeSlider(slider) {
    // slider.closeOpened();
    slider.open();
  }

  delete(slider, keyword: any) {
    slider.close();
    console.log('keyword :', keyword);
  }

  edit(slider, keyword: any) {
    slider.close();
    console.log('edit :', keyword);
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

  hello(){
    alert('ad');
  }

}
