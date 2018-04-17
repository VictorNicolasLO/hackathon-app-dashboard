import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LayoutComponent } from '../layout/layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { AuthGuard } from '../guards/auth.guard';
import { LoginGuard } from '../guards/login.guard';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' },

        ]

    },

    { 
        canActivate: [LoginGuard], 
        path: 'auth', loadChildren: './auth/auth.module#AuthModule' 
    },
    { path: '**', redirectTo: '' }
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
