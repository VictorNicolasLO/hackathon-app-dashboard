import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutComponent } from '../layout/layout/layout.component';
import { LayoutModule } from '../layout/layout.module';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },
          
        ]

    },
    
    { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
    { path: '**', redirectTo: 'home' }
];


@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes),
        
        //    ServiceWorkerModule
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})

export class AppRouting {

}
