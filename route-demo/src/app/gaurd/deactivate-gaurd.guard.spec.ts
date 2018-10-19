import { TestBed, async, inject } from '@angular/core/testing';

import { DeactivateGaurdGuard } from './deactivate-gaurd.guard';

describe('DeactivateGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateGaurdGuard]
    });
  });

  it('should ...', inject([DeactivateGaurdGuard], (guard: DeactivateGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
