import { TestBed } from '@angular/core/testing';

import { DadosAcoesService } from './dados-acoes.service';

describe('DadosAcoesService', () => {
  let service: DadosAcoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosAcoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
