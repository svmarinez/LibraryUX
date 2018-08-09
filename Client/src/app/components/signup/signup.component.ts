import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';
import { FormsModule, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  email: string;
  Password: string;
  name: string;
  confirmPassword: string;
  errorEmail: Boolean;
  errorConfirmPassword: Boolean;

  constructor(private ss: SessionService, private r: Router) {}

  ngOnInit() {}

  signup() {
    if (!this.email.includes('@')) {
      this.errorEmail = true;
    } else {
      if (this.Password === this.confirmPassword) {
        this.ss.signup(this.email, this.Password, this.name).subscribe((user: any) => {
          this.email = '';
          this.Password = '';
          this.name = '';
          this.r.navigate(['/login']);
        });
      } else {
        this.errorConfirmPassword = true;
      }
      }
    }
}
