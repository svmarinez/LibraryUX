import { TestBed, inject } from '@angular/core/testing';

import { PushbackService } from './pushback.service';

describe('PushbackService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushbackService]
    });
  });

  it('should be created', inject([PushbackService], (service: PushbackService) => {
    expect(service).toBeTruthy();
  }));
});
