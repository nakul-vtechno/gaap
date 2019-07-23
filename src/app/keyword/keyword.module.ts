import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { SharedComponentModule } from '../shared-component/shared-component.module';

import { KeywordPage } from './keyword.page';

const routes: Routes = [
  {
    path: '',
    component: KeywordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeywordPage]
})
export class KeywordPageModule {}
