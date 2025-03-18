import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaClienteComponent } from './conta-cliente.component';

describe('ContaClienteComponent', () => {
  let component: ContaClienteComponent;
  let fixture: ComponentFixture<ContaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
