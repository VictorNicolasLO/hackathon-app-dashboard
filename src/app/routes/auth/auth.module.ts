import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },]

@NgModule({
  imports: [
    
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent]
})
export class AuthModule { }