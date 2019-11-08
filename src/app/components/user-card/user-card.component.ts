import { Component, OnInit } from '@angular/core';


import { CurrentUser } from '../../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  userID = CurrentUser.ers_users_id;
  userName = CurrentUser.ers_username;
  firstName = CurrentUser.user_first_name;
  lastName = CurrentUser.user_last_name;
  email = CurrentUser.user_email;
  role = CurrentUser.user_role;

  constructor() {
  }

  ngOnInit() {
    console.log('user-card-comp is in init phase:')
    console.log(this.firstName);
  }

}
