import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { BadgesComponent } from './badges/badges.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { PlacesComponent } from './places/places.component';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { UsersComponent } from './users/users.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'categories', component: CategoriesComponent
 }
]

@NgModule({
  imports: [
    MatDividerModule,
    FormsModule,
    CommonModule,
    ServiceWorkerModule,
    MatCardModule,
    SharedModule,
    FlexModule,
    FlexLayoutModule,
    MatSnackBarModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent, BadgesComponent, CategoriesComponent, PlacesComponent, UsersComponent, /*LoginComponent*/]
})
export class HomeModule { }
