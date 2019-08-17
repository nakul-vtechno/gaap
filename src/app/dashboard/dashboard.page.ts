import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public keywords: Array<{}>;
  public currentStep = 1;
  public keywordValue = '';
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    this.keywords = [
      {
        name: 'Mega Man X',
        id: '1'
      },
      {
        name: 'Pac-Man',
        id: '1'
      },
      {
        name: 'hello',
        id: '1'
      },
    ];
  }

  onClickSendButton() {
    if (this.keywordValue === '') {
      this.presentToastWithOptions();
      return;
    }
    this.currentStep = this.currentStep === 1 ? 2 : 1;
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      message: 'Please provide the keyword.',
      duration: 2000,
      position: 'middle',
      showCloseButton : true
    });
    toast.present();
  }

}
