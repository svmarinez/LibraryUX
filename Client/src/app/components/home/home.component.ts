import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  constructor(private suc: SignupComponent, private lic: LoginComponent) {
  }
  ngOnInit() { }

}
