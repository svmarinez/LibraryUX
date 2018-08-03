import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private ss: SessionService, private r: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.ss.login(email, password).subscribe((user: any) => {
      this.r.navigate(['/']);
    });
  }

}
