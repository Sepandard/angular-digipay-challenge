import { TestBed } from '@angular/core/testing';

import { CurrenyStateService } from './curreny-state.service';

describe('CurrenyStateService', () => {
  let service: CurrenyStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrenyStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
