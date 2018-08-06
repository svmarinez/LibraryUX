import { Component, OnInit } from '@angular/core';
import { UserEditComponent } from '../user-edit/user-edit.component';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dropdownEdit(uec: UserEditComponent) { }
}
