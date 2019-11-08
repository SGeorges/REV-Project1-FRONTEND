import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrap } from './mdbbootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LoginService } from './services/login.service';
import { UserService } from './../app/services/user.service';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { ExpensetableComponent } from './components/expensetable/expensetable.component';
import { TicketDetailComponent } from './components/ticket-detail/ticket-detail.component';
import { TicketTableComponent } from './components/ticket-table/ticket-table.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { HistoryComponent } from './Pages/history/history.component';
import { ManagementComponent } from './pages/management/management.component';
import { FormComponent } from './pages/form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserCardComponent,
    ProfileComponent,
    ExpensetableComponent,
    TicketDetailComponent,
    TicketTableComponent,
    TicketFormComponent,
    HistoryComponent,
    ManagementComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrap,
    MDBBootstrapModule.forRoot()
  ],
  providers: [LoginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }