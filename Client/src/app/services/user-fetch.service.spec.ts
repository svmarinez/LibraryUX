import { TestBed, inject } from '@angular/core/testing';

import { UserFetchService } from './user-fetch.service';

describe('UserFetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserFetchService]
    });
  });

  it('should be created', inject([UserFetchService], (service: UserFetchService) => {
    expect(service).toBeTruthy();
  }));
});
