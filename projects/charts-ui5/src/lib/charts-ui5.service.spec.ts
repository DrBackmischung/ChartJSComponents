import { TestBed } from '@angular/core/testing';

import { ChartsUi5Service } from './charts-ui5.service';

describe('ChartsUi5Service', () => {
  let service: ChartsUi5Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartsUi5Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
