import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxpagesComponent } from './uxpages.component';

describe('UxpagesComponent', () => {
  let component: UxpagesComponent;
  let fixture: ComponentFixture<UxpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
