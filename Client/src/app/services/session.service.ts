import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const {BASEURL} = environment;

interface UserObject {
  email: string;
  password: string;
}


@Injectable()
export class SessionService {

  user: UserObject;

  options: object = {withCredentials: true};

  constructor(private http: Http) {
    this.isLogged().subscribe();
  }

  isLogged() {
    return this.http.get(`${BASEURL}/api/auth/currentuser`, this.options)
    .pipe(
      map( (res: Response) => {
        this.user = res.json();
        console.log(`Automatically login ${this.user.email}`);
        return this.user;
      }),
      catchError(e => of(this.errorHandler(e)))
    );
  }

  errorHandler(e) {
    console.log('SessionServiceError');
    console.log(e.message);
    console.log(e);
    return e;
  }
    login(email: string, password: string): Observable<object> {
      return this.http.post(`${BASEURL}/api/auth/login`, { email, password }, this.options)
      .pipe(
        map( (res: Response) => {
          const user = res.json();
          this.user = user;
          return this.user;
        }),
        catchError( e => of(this.errorHandler(e)))
      );
    }

  logout() {
        return this.http.get(`${BASEURL}/api/auth/logout`, this.options).pipe(
          map( (res: Response) => {
            this.user = null;
          }),
          catchError( e => of(this.errorHandler(e)))
        );
      }
  signup(email: string, password: string): Observable<object> {
    return this.http.post(`${BASEURL}/api/auth/signup`, { email, password}, this.options).pipe(
      map( (res: Response) => {
        const data = res.json();
        this.user = data.user;
        return this.user;
      }),
      catchError( e => of(this.errorHandler(e)))
    );
  }

}
