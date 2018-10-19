import { TestBed, async, inject } from '@angular/core/testing';

import { ActivateChildGaurdGuard } from './activate-child-gaurd.guard';

describe('ActivateChildGaurdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivateChildGaurdGuard]
    });
  });

  it('should ...', inject([ActivateChildGaurdGuard], (guard: ActivateChildGaurdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
