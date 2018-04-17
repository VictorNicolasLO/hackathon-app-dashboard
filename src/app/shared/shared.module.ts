import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './components/camera/camera.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    //   ServiceWorkerModule
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [CameraComponent],
  exports: [CameraComponent, RouterModule, FlexLayoutModule, MatButtonModule,
    MatInputModule,
    MatFormFieldModule,]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
