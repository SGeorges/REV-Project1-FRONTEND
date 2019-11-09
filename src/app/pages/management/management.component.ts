import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CurrentUser } from 'src/app/user';
import { MgmtService } from 'src/app/services/mgmt.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(
    private mgmtService : MgmtService,
    private userService : UserService) { }

  ngOnInit() {
    this.mgmtService.getTickets();
  }

}
