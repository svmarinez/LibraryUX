import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  email: string;
  Password: string;
  name: string;

  constructor(private ss: SessionService, private r: Router) {}

  ngOnInit() {}

  signup() {
    // console.log(this.Password);
    this.ss.signup(this.email, this.Password, this.name).subscribe((user: any) => {
      this.r.navigate(['/']);
    });
  }

}
