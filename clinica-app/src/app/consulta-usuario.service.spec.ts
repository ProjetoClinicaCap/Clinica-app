import { TestBed } from '@angular/core/testing';

import { ConsultaUsuarioService } from './consulta-usuario.service';

describe('ConsultaUsuarioService', () => {
  let service: ConsultaUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultaUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
