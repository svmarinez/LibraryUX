import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user;
  constructor(public ss: SessionService) {
    ss.isLogged().subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

}
