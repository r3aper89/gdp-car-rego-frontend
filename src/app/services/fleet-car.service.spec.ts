import { TestBed } from '@angular/core/testing';

import { FleetCarService } from './fleet-car.service';

describe('FleetCarService', () => {
  let service: FleetCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
