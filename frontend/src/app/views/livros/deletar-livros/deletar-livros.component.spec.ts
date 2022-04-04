import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarLivrosComponent } from './deletar-livros.component';

describe('DeletarLivrosComponent', () => {
  let component: DeletarLivrosComponent;
  let fixture: ComponentFixture<DeletarLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletarLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
