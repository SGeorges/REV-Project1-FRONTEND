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


  public pendingArray: TicketData[] = [];
  public approvedArray: TicketData[] = [];
  public deniedArray: TicketData[] = [];

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
    this.pendingArray.length = 0;
    this.approvedArray.length = 0;
    this.deniedArray.length = 0;

    if(this.ticketSubscription) {
      this.ticketSubscription.unsubscribe();
    }

    this.ticketSubscription = await this.userService.ticketData
    .subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        switch (data[i].reimb_status) {
          case 'PENDING' :
            this.pendingArray.push(data[i]);
            break;
          case 'APPROVED' :
              this.approvedArray.push(data[i]);
            break;
          case 'DENIED' :
            this.deniedArray.push(data[i]);
            break;
        }
      }
      console.log([this.pendingArray, this.approvedArray, this.deniedArray]);
      this.pendingArray = [...this.pendingArray];
      this.approvedArray = [...this.approvedArray];
      this.deniedArray = [...this.deniedArray];
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
