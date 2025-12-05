/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LenguageService } from './lenguage.service';

describe('Service: Lenguage', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LenguageService]
    });
  });

  it('should ...', inject([LenguageService], (service: LenguageService) => {
    expect(service).toBeTruthy();
  }));
});
