import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  constructor( private router: Router) {
  }
  ngOnInit() { }

  signup() {
    this.router.navigate(['/signup']);
  }
  login() {
    this.router.navigate(['/login']);
  }

}
