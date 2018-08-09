import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LibrarySaveService } from '../../services/library-save.service';

@Component({
  selector: 'app-library-add',
  templateUrl: './library-add.component.html',
  styleUrls: ['./library-add.component.scss']
})
export class LibraryAddComponent implements OnInit {
  user: Object;
  library: Object = {
    name: '',
    country: '',
    province: '',
    city: '',
    location: {}
  };

  constructor(
    private ss: SessionService,
    private r: Router,
    private router: ActivatedRoute,
    public lss: LibrarySaveService
  ) {
    this.ss.isLogged().subscribe(user => this.user = user);
    this.lss
      .findLibrary()
      .subscribe(
        (library) => this.library = library
      );
  }

  ngOnInit() {}

  add() {
    this.lss.add(this.library).subscribe((res: any) => {
      this.r.navigate(['libHome']);
    });
  }
}
