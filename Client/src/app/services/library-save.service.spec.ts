import { TestBed, inject } from '@angular/core/testing';

import { LibrarySaveService } from './library-save.service';

describe('LibrarySaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibrarySaveService]
    });
  });

  it('should be created', inject([LibrarySaveService], (service: LibrarySaveService) => {
    expect(service).toBeTruthy();
  }));
});
