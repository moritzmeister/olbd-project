import { TestBed } from '@angular/core/testing';

import { MuseumService } from './museum.service';

describe('MuseumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MuseumService = TestBed.get(MuseumService);
    expect(service).toBeTruthy();
  });
});
