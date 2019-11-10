import { Component, OnInit } from '@angular/core';

import { ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md'

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

  public headElements = ['Id', 'Type', 'Date Submitted', 'Amount', 'Status'];
  public userId = CurrentUser.ers_users_id;

  public selectedId : number;
  public selectedSrc : string;

  ticketArray: TicketData[] = [];
  ticketSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.ticketSubscription = this.userService.ticketData
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

  modalClick(selected) {
    console.log("modalClick selected is this value : " +selected);
    this.selectedSrc = selected;
  }
}
