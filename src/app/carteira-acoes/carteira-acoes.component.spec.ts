import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraAcoesComponent } from './carteira-acoes.component';

describe('CarteiraAcoesComponent', () => {
  let component: CarteiraAcoesComponent;
  let fixture: ComponentFixture<CarteiraAcoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarteiraAcoesComponent]
    });
    fixture = TestBed.createComponent(CarteiraAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
