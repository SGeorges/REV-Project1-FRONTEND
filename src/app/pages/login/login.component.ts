import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CurrentUser } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validationForm: FormGroup;
  
  // Flag boolean
  invalidInput = false;

  // logged in 
  loggedIn = false;

  constructor(private loginService: LoginService, public fb: FormBuilder) {
    this.validationForm = fb.group({
      usernameInput: [null, [Validators.required]],
      passwordInput: [null, Validators.required],
    });
   }

  ngOnInit() {
  }

  get input() { return this.validationForm.get('usernameInput'); }
  get passwordFormEx() { return this.validationForm.get('passwordInput'); }

  authenticate() {
    const credentials = {
      username: this.validationForm.controls['usernameInput'].value,
      password: this.validationForm.controls['passwordInput'].value,
    };

    CurrentUser.ers_password = this.validationForm.controls['passwordInput'].value;

    this.loginService.loginHttp(credentials);
  }

}
