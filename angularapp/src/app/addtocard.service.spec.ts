import { TestBed } from '@angular/core/testing';

import { AddtocardService } from './addtocard/addtocard.service';

describe('AddtocardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtocardService = TestBed.get(AddtocardService);
    expect(service).toBeTruthy();
  });
});
