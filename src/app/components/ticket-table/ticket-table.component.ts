import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';
import { TicketData } from '../../models/ticketData';
import { CurrentUser } from '../../user';

@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.scss']
})
export class TicketTableComponent implements OnInit {

  public headElements = ['Id', 'Amount', 'Type', 'Date Submitted', 'Status'];
  public userId = CurrentUser.ers_users_id;

  public selectedId : number;

  ticketArray: TicketData[] = [];
  ticketSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.ticketSubscription = this.userService.$ticketData
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].reimb_author_id == this.userId) {
            this.ticketArray.push(data[i]);
          }
        }
      }
  )};

  selectTicket(ticketId: number) {
    if (this.selectedId == ticketId) {
      this.selectedId = 0;
    } else {
      this.selectedId = ticketId;
    }
  }

  approved(ticketId: number) {
    console.log(ticketId);
    for( let i = 0; i < this.ticketArray.length; i++) {
      if (this.ticketArray[i].reimb_id == ticketId) {
        this.ticketArray[i].reimb_status = "APPROVED";
      }
    }
    //CurrentUser.ers_password = this.validationForm.controls['passwordInput'].value;

    //this.loginService.loginHttp(credentials);
  }

  denied(ticketId: number) {
    console.log(ticketId);

  }

}
