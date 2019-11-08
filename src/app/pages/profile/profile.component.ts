import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { CurrentUser } from '../../user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private userService : UserService) { }

  ngOnInit() {
    const credentials = {
      username: CurrentUser.ers_username,
      password: CurrentUser.ers_password
    }
    
    this.userService.getExpenses(credentials);
  }

}
