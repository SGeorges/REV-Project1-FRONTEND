import { Injectable } from '@angular/core';

import { Subject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CurrentUser } from './../user';
import { TicketData } from '../models/ticketData';
import { TicketRequest } from '../models/ticketRequest';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class MgmtService {
  public headElements = ['Id', 'Employee', 'Date Submitted', 'Type', 'Amount'];

  private pendingSubject: Subject<TicketData[]> = new Subject();
  public pendingArray: Observable<TicketData[]>
        = this.pendingSubject.asObservable();

  private approvedSubject: Subject<TicketData[]> = new Subject();
  public approvedArray: Observable<TicketData[]>
        = this.approvedSubject.asObservable();
        
  private deniedSubject: Subject<TicketData[]> = new Subject();
  public deniedArray: Observable<TicketData[]>
        = this.deniedSubject.asObservable();

  constructor(
    private httpClient: HttpClient,
    private userService: UserService) {}

  ticketSubscription: Subscription;

  async getTickets() {
    const credentials = {
      username: CurrentUser.ers_username,
      password: CurrentUser.ers_password
    }

    await this.userService.getExpenses(credentials);

    console.log("mgmt-service getTickets()");
    let newPendingArray: TicketData[] = [];
    let newApprovedArray: TicketData[] = [];
    let newDeniedArray: TicketData[] = [];

    if(this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }

    this.ticketSubscription = await this.userService.ticketData
    .subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        switch (data[i].reimb_status) {
          case 'PENDING' :
            newPendingArray.push(data[i]);
            break;
          case 'APPROVED' :
            newApprovedArray.push(data[i]);
            break;
          case 'DENIED' :
            newDeniedArray.push(data[i]);
            break;
        }
      }
      console.log([newPendingArray, newApprovedArray, newDeniedArray]);
      this.pendingSubject.next(newPendingArray);
      this.approvedSubject.next(newApprovedArray);
      this.deniedSubject.next(newDeniedArray);
    });
  }
    
  postApprove(ticketId: number) {
    const ticketRequest : TicketRequest = {
      userID: CurrentUser.ers_users_id,
      password: CurrentUser.ers_password,
      ticketID: ticketId
    }
    const url = 'http://localhost:8080/meadges/ApproveTicket/';

    this.httpClient.post(url, ticketRequest)
      .subscribe(data => {
        if (data) {
          this.getTickets();
        }
      });

      
  }

  postDenied(ticketId: number) {
    const ticketRequest : TicketRequest = {
      userID: CurrentUser.ers_users_id,
      password: CurrentUser.ers_password,
      ticketID: ticketId
    }
    const url = 'http://localhost:8080/meadges/DenyTicket/';

    this.httpClient.post(url, ticketRequest)
      .subscribe(data => {
        if (data) {
          this.getTickets();
        }
      });

      
  }
}
