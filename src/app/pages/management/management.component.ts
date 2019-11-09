import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CurrentUser } from 'src/app/user';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
    const credentials = {
      username: CurrentUser.ers_username,
      password: CurrentUser.ers_password
    }
    
    this.userService.getExpenses(credentials);
  }

}
