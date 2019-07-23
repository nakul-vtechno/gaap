import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './menu/menu.module#MenuPageModule' },
  {
    path: 'add-keyword', loadChildren: './keyword/add-keyword/add-keyword.module#AddKeywordPageModule',
    canLoad: [AuthGuard]
  },
  {
    path: 'edit-keyword', loadChildren: './keyword/edit-keyword/edit-keyword.module#EditKeywordPageModule',
    canLoad: [AuthGuard]
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'login', loadChildren: './auth/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
