import { TestBed, inject } from '@angular/core/testing';

import { BookDataService } from './book-data.service';

describe('BookDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookDataService]
    });
  });

  it('should ...', inject([BookDataService], (service: BookDataService) => {
    expect(service).toBeTruthy();
  }));
});
