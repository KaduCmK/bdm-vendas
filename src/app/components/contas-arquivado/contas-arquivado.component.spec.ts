import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasArquivadoComponent } from './contas-arquivado.component';

describe('ContasArquivadoComponent', () => {
  let component: ContasArquivadoComponent;
  let fixture: ComponentFixture<ContasArquivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContasArquivadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContasArquivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
