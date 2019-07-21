import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },  { path: 'add-keyword', loadChildren: './keyword/add-keyword/add-keyword.module#AddKeywordPageModule' },
  { path: 'edit-keyword', loadChildren: './keyword/edit-keyword/edit-keyword.module#EditKeywordPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
