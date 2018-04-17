import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },

]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ServiceWorkerModule
  ],
  declarations: [HomeComponent, /*LoginComponent*/]
})
export class HomeModule { }
