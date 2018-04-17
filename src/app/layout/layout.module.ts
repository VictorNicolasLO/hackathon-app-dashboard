import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from '../shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    SharedModule.forRoot(),
    BrowserModule,
    FormsModule,
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MatToolbarModule
  ],
  declarations: [LayoutComponent],
  
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule { }
