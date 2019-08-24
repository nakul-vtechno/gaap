import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DashboardFormComponent } from './dashboard-form/dashboard-form.component';
import { KeywordsListComponent } from './keywords-list/keywords-list.component';
// import { KeywordListCardsComponent } from './keyword-list-cards/keyword-list-cards.component';
// import { ExpandableCardDirective } from './directives/expandable-card.directive';

@NgModule({
  declarations: [KeywordsListComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [KeywordsListComponent]
})
export class SharedComponentModule { }
