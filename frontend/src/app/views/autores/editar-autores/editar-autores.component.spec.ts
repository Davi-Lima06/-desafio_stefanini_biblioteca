import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutoresComponent } from './editar-autores.component';

describe('EditarAutoresComponent', () => {
  let component: EditarAutoresComponent;
  let fixture: ComponentFixture<EditarAutoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAutoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAutoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
