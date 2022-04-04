import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarAutoresComponent } from './cadastrar-autores.component';

describe('CadastrarAutoresComponent', () => {
  let component: CadastrarAutoresComponent;
  let fixture: ComponentFixture<CadastrarAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
