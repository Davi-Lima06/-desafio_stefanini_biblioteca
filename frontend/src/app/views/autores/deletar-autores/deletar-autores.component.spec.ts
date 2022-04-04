import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarAutoresComponent } from './deletar-autores.component';

describe('DeletarAutoresComponent', () => {
  let component: DeletarAutoresComponent;
  let fixture: ComponentFixture<DeletarAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
