import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AuthUserGuard} from './core/auth-user.guard'
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
    {
        path: 'singup',
        loadChildren: ()=> import('src/app/signup/signup.module').then(m => m.SignupModule) 
    },            
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthUserGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthUserGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
