import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public currentStep = 1;
  public keywordValue = '';
  public loading = true;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
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
