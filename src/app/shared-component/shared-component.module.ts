import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { KeywordsListComponent } from './keywords-list/keywords-list.component';

@NgModule({
  declarations: [KeywordsListComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [KeywordsListComponent]
})
export class SharedComponentModule { }
