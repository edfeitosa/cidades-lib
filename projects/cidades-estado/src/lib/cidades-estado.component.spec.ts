import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadesEstadoComponent } from './cidades-estado.component';

describe('CidadesEstadoComponent', () => {
  let component: CidadesEstadoComponent;
  let fixture: ComponentFixture<CidadesEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CidadesEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CidadesEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
