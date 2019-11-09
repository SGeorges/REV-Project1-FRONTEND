import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/user';
import { TicketData } from 'src/app/models/ticketData';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MgmtService } from 'src/app/services/mgmt.service';

@Component({
  selector: 'app-mgmt-denied-table',
  templateUrl: './mgmt-denied-table.component.html',
  styleUrls: ['./mgmt-denied-table.component.scss']
})
export class MgmtDeniedTableComponent implements OnInit {

  public headElements: string[] = this.mgmtService.headElements;
  public userId: number = CurrentUser.ers_users_id;

  public selectedId: number;

  deniedArray: TicketData[] = [];
  ticketSubscription: Subscription;
  
  constructor(
    private mgmtService: MgmtService,
    private userService: UserService) { }

  ngOnInit() {
    this.ticketSubscription = this.mgmtService.deniedArray
      .subscribe(data => {
        this.deniedArray = data;
      });
  }

  selectTicket(ticketId: number) {
    if (this.selectedId == ticketId) {
      this.selectedId = 0;
    } else {
      this.selectedId = ticketId;
    }
  }
}
