import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SearchComponent } from './search/search.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
 
  ],
  declarations: [LayoutComponent, SearchComponent],
  
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }
