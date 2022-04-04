import { Router } from '@angular/router';
import { AutoresService } from './../autores.service';
import  Autor  from 'src/app/global/models/autor.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-autores',
  templateUrl: './cadastrar-autores.component.html',
  styleUrls: ['./cadastrar-autores.component.scss']
})
export class CadastrarAutoresComponent implements OnInit {

  novoAutorForm!: FormGroup

  autor: Autor = {
    nome: '',
    ISNI: 0,
    email: '',
    dataNascimento: '',
    biografia: ''
  }
  constructor(
    private service: AutoresService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.novoAutorForm = new FormGroup({
      nome: new FormControl(),
      ISNI: new FormControl(),
      email: new FormControl(),
      dataNascimento: new FormControl(),
      biografia: new FormControl(),

    })
  }

  submit(form: any){
    const novoAutor = this.novoAutorForm.getRawValue() as Autor;
          this.service.cadastrarAutor(novoAutor).subscribe(
            sucsess => {
              this.service.showMessage('Cliente cadastrado com sucesso')
              this.router.navigate(['/autores/'])
            },
            error => {
              this.service.showMessage('Email já cadastrado')
              console.log(error)
            }
          )



  }

}
