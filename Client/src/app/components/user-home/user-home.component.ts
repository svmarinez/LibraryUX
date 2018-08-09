import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { UserFetchService } from '../../services/user-fetch.service';
import { LibrarySaveService } from '../../services/library-save.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  user: Object;
  libraries: Array<Object>;

  constructor(
    private ss: SessionService,
    private r: Router,
    private router: ActivatedRoute,
    public uf: UserFetchService,
    public lib: LibrarySaveService
  ) {
    this.uf.findUser().subscribe(user => (this.user = user));
    this.lib.findLibrary().subscribe(libraries => (this.libraries = libraries));
  }
  ngOnInit() {}
}
