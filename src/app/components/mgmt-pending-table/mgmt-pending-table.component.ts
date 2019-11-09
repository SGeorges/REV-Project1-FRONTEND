import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../../user';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { TicketData } from '../../models/ticketData';

@Component({
  selector: 'app-mgmt-pending-table',
  templateUrl: './mgmt-pending-table.component.html',
  styleUrls: ['./mgmt-pending-table.component.scss']
})
export class MgmtPendingTableComponent implements OnInit {

  public headElements = ['Id', 'Employee', 'Date Submitted', 'Type', 'Amount']
  public userId = CurrentUser.ers_users_id;

  public selectedId: number;

  pendingArray: TicketData[] = [];
  ticketSubscription: Subscription;


  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log("mgmt-pending happening");
    this.ticketSubscription = this.userService.ticketData
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          if (data[i].reimb_status == 'PENDING') {
            this.pendingArray.push(data[i]);
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
