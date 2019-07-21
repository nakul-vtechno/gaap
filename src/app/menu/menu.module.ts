import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';
import { MenuRoutingModule } from './menu.router.module';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MenuRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
