import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

import { CurrentUser } from '../../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  name = `${CurrentUser.user_first_name} ${CurrentUser.user_last_name}`;
  userSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
