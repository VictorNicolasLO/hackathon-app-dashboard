import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './components/camera/camera.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ClickOutsideModule } from 'ng4-click-outside';
import { MakeTableComponent } from './components/make-table/make-table.component';
import { MakeCrudComponent } from './components/make-crud/make-crud.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ClickOutsideModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCardModule,
    ChartsModule
  ],
  declarations: [CameraComponent, MakeTableComponent, MakeCrudComponent, GenericDialogComponent],
  exports: [
    GenericDialogComponent,
    CameraComponent,
    RouterModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MakeCrudComponent,
    MatFormFieldModule,
    ClickOutsideModule,
    MakeTableComponent,
    MakeCrudComponent,
    MatTableModule,
    ChartsModule
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
