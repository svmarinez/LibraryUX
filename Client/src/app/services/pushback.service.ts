import { Injectable } from '@angular/core';
import { SessionService, UserObject } from './session.service';
import { RequiredValidator } from '@angular/forms';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
const { BASEURL } = environment;

@Injectable()
export class PushbackService {
    user: UserObject;
    options: object = { withCredentials: true };

    constructor(private http: Http) {

    }
    addAnswers(form, id) {
      return this.http
      .post(`${BASEURL}/form/new`, { form, id }, this.options)
      .pipe(
        map((res: Response) => res.json())
      );
    }
  }


