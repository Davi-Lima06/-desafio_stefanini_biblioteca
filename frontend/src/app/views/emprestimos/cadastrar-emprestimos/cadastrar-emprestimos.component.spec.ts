import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarEmprestimosComponent } from './cadastrar-emprestimos.component';

describe('CadastrarEmprestimosComponent', () => {
  let component: CadastrarEmprestimosComponent;
  let fixture: ComponentFixture<CadastrarEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarEmprestimosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
