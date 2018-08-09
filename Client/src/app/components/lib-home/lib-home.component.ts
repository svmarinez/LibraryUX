import { Component, OnInit } from '@angular/core';
import { LibrarySaveService } from '../../services/library-save.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lib-home',
  templateUrl: './lib-home.component.html',
  styleUrls: ['./lib-home.component.scss']
})
export class LibHomeComponent implements OnInit {
  formsLibrary;
  constructor(public ls: LibrarySaveService, public router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.ls.formsLibrary(params.id).subscribe(formsLibrary => this.formsLibrary = formsLibrary);
    });
  }

}
