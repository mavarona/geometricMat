import { TestBed, inject } from '@angular/core/testing';

import { GeometricService } from './geometric.service';

describe('GeometricService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeometricService]
    });
  });

  it('should be created', inject([GeometricService], (service: GeometricService) => {
    expect(service).toBeTruthy();
  }));
});
