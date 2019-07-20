import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public actionSheetController: ActionSheetController) { }

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
