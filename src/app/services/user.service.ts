import { Injectable } from '@angular/core';
import { UserData } from '../models/userData';

import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { CurrentUser } from './../user';
import { TicketData } from '../models/ticketData';
import { TicketRequest } from '../models/ticketRequest';

//import { Mock } from 'protractor/built/driverProviders';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private ticketSubject: Subject<TicketData[]> = new Subject();
  public $ticketData: Observable<TicketData[]>
        = this.ticketSubject.asObservable();
        
  constructor(
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  getExpenses(credentials) {
    const url = 'http://localhost:8080/meadges/viewTickets/';
    this.httpClient.post(url, credentials)
    .subscribe((data: TicketData[]) => {
      console.log(data);
      this.ticketSubject.next(data)
      console.log(this.$ticketData);
      });

  }

  postApprove(ticketId: number) {
    const ticketRequest : TicketRequest = {
      userID: CurrentUser.ers_users_id,
      password: CurrentUser.ers_password,
      ticketID: ticketId
    }
    const url = 'http://localhost:8080/meadges/ApproveTicket/';

 //   this.httpClient.post(url, ticketRequest)
 //     .subscribe((data:))
  }
}
