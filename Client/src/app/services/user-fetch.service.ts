import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

const { BASEURL } = environment;

@Injectable({
  providedIn: 'root'
})
export class UserFetchService {
  options: object = { withCredentials: true };

  constructor(private http: Http) {}

  findUser() {
    return this.http.get(`${BASEURL}/user`, this.options).pipe(map(res => res.json()));
  }
}
