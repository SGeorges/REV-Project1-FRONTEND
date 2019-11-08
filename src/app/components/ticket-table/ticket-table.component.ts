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

  public headElements = ['ID', 'AMOUNT', 'TYPE', 'SUBMITTED', 'STATUS'];
  public admin = CurrentUser.user_role_id == 1;
  public userId = CurrentUser.ers_users_id;

  ticketArray: TicketData[] = [];
  ticketSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.ticketSubscription = this.userService.$ticketData
      .subscribe(data => {
        for (let i = 0; i < data.length; i++) {
          this.ticketArray.push(data[i]);
        }
      }
  )};

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
