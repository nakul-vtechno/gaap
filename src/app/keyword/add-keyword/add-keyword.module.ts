import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddKeywordPage } from './add-keyword.page';
import { StepDetailComponent } from '../component/step-detail/step-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AddKeywordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddKeywordPage, StepDetailComponent]
})
export class AddKeywordPageModule {}
