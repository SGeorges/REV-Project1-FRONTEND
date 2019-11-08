import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { UserData } from './../models/userData';
import { CurrentUser } from './../user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentlyLoggedIn = false;

  constructor(
      private router: Router, 
      private httpClient: HttpClient) { }

  async login(valid : boolean) {
    console.log('login running : ' + valid);

    if (valid) {
      // credentials valid
      await this.router.navigateByUrl('/profile');
    } else {
      // credentials invalid
      return false;
    }
  }

  loginHttp(credentials: {username: string, password: string}) {
    const loginCredentials = {
      username: credentials.username,
      password: credentials.password
    };

    console.log(loginCredentials);
    const url = 'http://localhost:8080/meadges/user';
    this.httpClient.post(url, loginCredentials)
        .subscribe((data: UserData) => {
            CurrentUser.ers_users_id = data.ers_users_id;
            CurrentUser.ers_username = data.ers_username;

            CurrentUser.user_first_name = data.user_first_name;
            CurrentUser.user_last_name = data.user_last_name;
            CurrentUser.user_email = data.user_email;
            CurrentUser.user_role = data.user_role;
            CurrentUser.user_role_id = data.user_role_id;
            
            this.currentlyLoggedIn = ((loginCredentials.username === data.ers_username) ? true : false);     
            this.login(this.currentlyLoggedIn)
          });
  }

}
