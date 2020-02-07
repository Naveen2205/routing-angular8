import { TestBed } from '@angular/core/testing';

import { ListDetailService } from './list-detail.service';

describe('ListDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListDetailService = TestBed.get(ListDetailService);
    expect(service).toBeTruthy();
  });
});
