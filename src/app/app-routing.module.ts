import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from 'src/app/Pages/login/login.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { HistoryComponent } from './Pages/history/history.component';

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
    component: TicketFormComponent
}, {
    path: 'history',
    component: HistoryComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
