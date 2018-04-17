import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './components/camera/camera.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
 //   ServiceWorkerModule
  ],
  declarations: [CameraComponent],
  exports :[CameraComponent,RouterModule]
})
export class SharedModule { 

  static forRoot(): ModuleWithProviders {
    return {
        ngModule: SharedModule
    };
}
}
