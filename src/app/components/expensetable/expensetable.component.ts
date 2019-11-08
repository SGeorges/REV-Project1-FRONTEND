import { Component, OnInit } from '@angular/core';

import { CurrentUser } from '../../user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-expensetable',
  templateUrl: './expensetable.component.html',
  styleUrls: ['./expensetable.component.scss']
})
export class ExpensetableComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
