import { Component, OnInit } from '@angular/core';
import { CurrentUser } from '../../user';
import { Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { TicketData } from '../../models/ticketData';
import { MgmtService } from 'src/app/services/mgmt.service';

@Component({
  selector: 'app-mgmt-pending-table',
  templateUrl: './mgmt-pending-table.component.html',
  styleUrls: ['./mgmt-pending-table.component.scss']
})
export class MgmtPendingTableComponent implements OnInit {

  public headElements: string[] = this.mgmtService.headElements;
  public userId: number = CurrentUser.ers_users_id;

  public selectedId: number;

  pendingArray: TicketData[];
  ticketSubscription: Subscription;


  constructor(
    private userService: UserService,
    private mgmtService : MgmtService) { }

  ngOnInit() {
    this.pendingArray = this.mgmtService.pendingArray
  }

  selectTicket(ticketId: number) {
    if (this.selectedId == ticketId) {
      this.selectedId = 0;
    } else {
      this.selectedId = ticketId;
    }
  }

  approved(ticketId: number) {
    console.log(ticketId);
    this.mgmtService.postApprove(ticketId);
  }

  denied(ticketId: number) {
    console.log(ticketId);
    this.mgmtService.postDenied(ticketId);
  }
}
