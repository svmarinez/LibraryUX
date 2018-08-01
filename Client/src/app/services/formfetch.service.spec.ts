import { TestBed, inject } from '@angular/core/testing';

import { FormfetchService } from './formfetch.service';

describe('FormfetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormfetchService]
    });
  });

  it('should be created', inject([FormfetchService], (service: FormfetchService) => {
    expect(service).toBeTruthy();
  }));
});
