import { TestBed } from '@angular/core/testing';

import { ServiceEspecialidadeService } from './service-especialidade.service';

describe('ServiceEspecialidadeService', () => {
  let service: ServiceEspecialidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEspecialidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
