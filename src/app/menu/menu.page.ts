import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {

  constructor(
    public actionSheetController: ActionSheetController,
    private authService:AuthService) { }

  async more() {
    const actionSheet = await this.actionSheetController.create({
      header: 'More...',
      buttons: [
        {
          text: 'My Account',
          icon: 'person',
          cssClass: 'more-action-sheet',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'FAQs',
          icon: 'arrow-dropright-circle',
          cssClass: 'more-action-sheet',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'How it Works',
          icon: 'jet',
          cssClass: 'more-action-sheet',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Contact',
          icon: 'contacts',
          cssClass: 'more-action-sheet',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Logout',
          icon: 'log-out',
          cssClass: 'more-action-sheet',
          handler: () => {
            this.authService.logout();
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          cssClass: 'more-action-sheet',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

}

