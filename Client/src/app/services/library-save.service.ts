import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const { BASEURL } = environment;


@Injectable({
  providedIn: 'root'
})
export class LibrarySaveService {
  library: any;
  options: object = { withCredentials: true };

  constructor(private http: Http) {}

  findLibrary() {
    return this.http
      .get(`${BASEURL}/lib/list`, this.options)
      .pipe(map(res => res.json()));
  }

  add(library) {
    console.log(library);
    return this.http
    .post(`${BASEURL}/lib/new`, { library }, this.options)
      .pipe(map(res => res.json()));
  }
  formsLibrary(idLibrary) {
    return this.http
    .get(`${BASEURL}/lib/${idLibrary}`).pipe(map(res => res.json()));
  }
}
