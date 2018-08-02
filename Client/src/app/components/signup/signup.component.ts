import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private ss: SessionService, private r: Router) {}

  ngOnInit() {}

  signup(email: string, name: string, password: string, hasRole: boolean ) {
    this.ss.signup(email, password).subscribe((user: any) => {
      this.r.navigate(['/']);
    });
  }

}
