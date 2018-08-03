import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const { BASEURL } = environment;

interface UserObject {
  email: string;
  name: string;
  password: string;
  hasRole: boolean;
}

@Injectable()
export class SessionService {
  user: UserObject;

  options: object = { withCredentials: true };

  constructor(private http: Http) {
    this.isLogged().subscribe();
  }

  signup(email: string, password: string, name: string): Observable<object> {
    return this.http
      .post(`${BASEURL}/auth/signup`, { email, password, name }, this.options)
      .pipe(
        map(res => res.json()),
        catchError(e => of(this.errorHandler(e)))
      );
  }

  login(email: string, password: string): Observable<object> {
    return this.http
      .post(`${BASEURL}/auth/login`, { email, password }, this.options)
      .pipe(
        map((res: Response) => {
          const user = res.json();
          this.user = user;
          return this.user;
        }),
        catchError(e => of(this.errorHandler(e)))
      );
  }

  isLogged() {
    return this.http.get(`${BASEURL}/auth/login`, this.options).pipe(
      map((res: Response) => {
        this.user = res.json();
        console.log(`Automatically login ${this.user.email}`);
        return this.user;
      }),
      catchError(e => of(this.errorHandler(e)))
    );
  }

  logout() {
    return this.http.get(`${BASEURL}/auth/logout`, this.options).pipe(
      map((res: Response) => {
        this.user = null;
      }),
      catchError(e => of(this.errorHandler(e)))
    );
  }

  errorHandler(e) {
    console.log(e.message);
    console.log(e);
    return e;
  }
}
