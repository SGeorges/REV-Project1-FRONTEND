import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/user';
import { TicketData } from 'src/app/models/ticketData';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mgmt-denied-table',
  templateUrl: './mgmt-denied-table.component.html',
  styleUrls: ['./mgmt-denied-table.component.scss']
})
export class MgmtDeniedTableComponent implements OnInit {

  public headElements = ['Id', 'Employee', 'Date Submitted', 'Type', 'Amount']
  public userId = CurrentUser.ers_users_id;

  public selectedId: number;

  deniedArray: TicketData[] = [];
  ticketSubscription: Subscription;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("mgmt-denied happening");
    this.ticketSubscription = this.userService.ticketData
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].reimb_status == 'DENIED') {
            this.deniedArray.push(data[i]);
          }
        }
      })
  }

  selectTicket(ticketId: number) {
    if (this.selectedId == ticketId) {
      this.selectedId = 0;
    } else {
      this.selectedId = ticketId;
    }
  }
}
