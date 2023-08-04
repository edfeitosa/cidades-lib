import { TestBed } from '@angular/core/testing';

import { CidadesEstadoService } from './cidades-estado.service';

describe('CidadesEstadoService', () => {
  let service: CidadesEstadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CidadesEstadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
