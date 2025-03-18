import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotasAbertoComponent } from './notas-aberto.component';

describe('NotasAbertoComponent', () => {
  let component: NotasAbertoComponent;
  let fixture: ComponentFixture<NotasAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotasAbertoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotasAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
