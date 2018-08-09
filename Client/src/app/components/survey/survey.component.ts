import { Component, Input, OnInit } from '@angular/core';
import { PushbackService } from '../../services/pushback.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  user;
  hidden: String = 'hidden';

  question = [
    'Name',
    'Address',
    'Contact Info',
    'Opening Hours',
    'Available Books',
    'Available Services',
    'Directions to Library',
    'Complaint Link',
    'Social Media Links',
    'Library Events',
    'Public Library System Events',
    'Link to Public Library System'
  ];
  form: any = [
    { question: this.question[0], hidden: 'hidden', value: 0 },
    { question: this.question[1], hidden: 'hidden', value: 0 },
    { question: this.question[2], hidden: 'hidden', value: 0 },
    { question: this.question[3], hidden: 'hidden', value: 0 },
    { question: this.question[4], hidden: 'hidden', value: 0 },
    { question: this.question[5], hidden: 'hidden', value: 0 },
    { question: this.question[6], hidden: 'hidden', value: 0 },
    { question: this.question[7], hidden: 'hidden', value: 0 },
    { question: this.question[8], hidden: 'hidden', value: 0 },
    { question: this.question[9], hidden: 'hidden', value: 0 },
    { question: this.question[10], hidden: 'hidden', value: 0 },
    { question: this.question[11], hidden: 'hidden', value: 0 }
  ];
  constructor(
    public ps: PushbackService,
    private ss: SessionService,
    private router: ActivatedRoute,
    public rt: Router) {
    ss.isLogged().subscribe(user => this.user = user);
  }

  ngOnInit() {}

  change(i) {
    if (this.form[i].hidden === 'hidden') {
      this.form[i].hidden = 'visible';
    } else {
      this.form[i].hidden = 'hidden';
    }
  }

  show() {
    this.form.forEach(element => {
      element.value = parseFloat(element['value']);
    });
    this.router.params.subscribe(params => {
      this.ps.addAnswers(this.form, params.id).subscribe(() => {
        this.rt.navigate(['/user']);
      });
    });

    console.log(this.form);
  }
}
