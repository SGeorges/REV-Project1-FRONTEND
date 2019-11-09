import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-expense-table',
  templateUrl: './expense-table.component.html',
  styleUrls: ['./expense-table.component.scss']
})
export class ExpenseTableComponent implements OnInit {

  public headElements = ['ID', 'Amount', 'Type', 'Submitted By', 'Date Submitted', 'Status'];

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
