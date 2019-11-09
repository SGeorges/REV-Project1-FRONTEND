import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrap } from './mdbbootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LoginService } from './services/login.service';
import { UserService } from './../app/services/user.service';
import { FormService } from './services/form.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { ManagementComponent } from './pages/management/management.component';
import { FormComponent } from './pages/form/form.component';
import { MgmtPendingTableComponent } from './components/mgmt-pending-table/mgmt-pending-table.component';
import { MgmtApprovedTableComponent } from './components/mgmt-approved-table/mgmt-approved-table.component';
import { MgmtDeniedTableComponent } from './components/mgmt-denied-table/mgmt-denied-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserCardComponent,
    ProfileComponent,
    TicketDetailComponent,
    TicketTableComponent,
    TicketFormComponent,
    ManagementComponent,
    FormComponent,
    MgmtPendingTableComponent,
    MgmtApprovedTableComponent,
    MgmtDeniedTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrap,
    MDBBootstrapModule.forRoot()
  ],
  providers: [LoginService, UserService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }