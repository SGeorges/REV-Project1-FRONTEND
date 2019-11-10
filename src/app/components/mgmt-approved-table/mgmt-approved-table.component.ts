import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/user';
import { TicketData } from 'src/app/models/ticketData';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { MgmtService } from 'src/app/services/mgmt.service';

@Component({
  selector: 'app-mgmt-approved-table',
  templateUrl: './mgmt-approved-table.component.html',
  styleUrls: ['./mgmt-approved-table.component.scss']
})
export class MgmtApprovedTableComponent implements OnInit {

  public headElements: string[] = this.mgmtService.headElements;
  public userId: number = CurrentUser.ers_users_id;

  public selectedId: number;
  public selectedSrc : string;

  approvedArray: TicketData[] = [];
  ticketSubscription: Subscription;


  constructor(
    private mgmtService: MgmtService,
    private userService: UserService) { }

  ngOnInit() {
    this.ticketSubscription = this.mgmtService.approvedArray
      .subscribe(data => {
        this.approvedArray = data;
      });
  }

  selectTicket(ticketId: number) {
    if (this.selectedId == ticketId) {
      this.selectedId = 0;
    } else {
      this.selectedId = ticketId;
    }
  }
  
  modalClick(selected) {
    console.log("modalClick selected is this value : " +selected);
    this.selectedSrc = selected;
  }
}
