import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ManagementComponent } from './pages/management/management.component';
import { FormComponent } from './pages/form/form.component';

export const routes: Routes = [{
    path: 'login',
    component: LoginComponent
}, {
    path: '',
    redirectTo: '/http-login',
    pathMatch: 'full'
}, {
    path: 'http-login',
    component: LoginComponent
}, {
    path: 'profile',
    component: ProfileComponent
}, {
    path:'form',
    component: FormComponent
}, {
    path: 'management',
    component: ManagementComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
