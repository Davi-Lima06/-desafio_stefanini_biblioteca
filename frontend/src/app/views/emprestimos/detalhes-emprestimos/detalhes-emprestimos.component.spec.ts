import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesEmprestimosComponent } from './detalhes-emprestimos.component';

describe('DetalhesEmprestimosComponent', () => {
  let component: DetalhesEmprestimosComponent;
  let fixture: ComponentFixture<DetalhesEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesEmprestimosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
