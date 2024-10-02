import { TestBed } from '@angular/core/testing';

import { NatstoreService } from './natstore.service';

describe('NatstoreService', () => {
  let service: NatstoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatstoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
