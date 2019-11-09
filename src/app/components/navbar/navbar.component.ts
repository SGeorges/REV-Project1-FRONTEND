import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CurrentUser } from 'src/app/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  admin : boolean = CurrentUser.user_role_id == 1;

  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  route(value) {

    switch(value) {
      case 0 :
        this.router.navigateByUrl('/profile')
        break;
      case 1 : 
        this.router.navigateByUrl('/form')
        break;
      case 2 : 
        this.router.navigateByUrl('/login')
        break;
      case 3 : 
        this.router.navigateByUrl('/management')
        break;
    }
    console.log(value);
  }
}
