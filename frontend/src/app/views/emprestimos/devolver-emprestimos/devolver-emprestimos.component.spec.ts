import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolverEmprestimosComponent } from './devolver-emprestimos.component';

describe('DevolverEmprestimosComponent', () => {
  let component: DevolverEmprestimosComponent;
  let fixture: ComponentFixture<DevolverEmprestimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolverEmprestimosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevolverEmprestimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
