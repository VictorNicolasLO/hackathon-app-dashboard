import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRouting } from './routes/app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LayoutComponent } from './layout/layout/layout.component';
import { LayoutModule } from './layout/layout.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule.forRoot(),
    AppRouting,
    CommonModule,
    LayoutModule,
    FlexLayoutModule,
    HttpModule,
    //ServiceWorkerModule.register('ngsw-worker.js'),
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [AuthService,ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
