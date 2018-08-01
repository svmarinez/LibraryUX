import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxhomeComponent } from './uxhome.component';

describe('UxhomeComponent', () => {
  let component: UxhomeComponent;
  let fixture: ComponentFixture<UxhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
