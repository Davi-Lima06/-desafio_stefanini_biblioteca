import { AutoresService } from './../../autores/autores.service';
import  Autor  from 'src/app/global/models/autor.model';
import { Router } from '@angular/router';
import { LivrosService } from './../livros.service';
import  Livro  from 'src/app/global/models/livro.model';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-livros',
  templateUrl: './cadastrar-livros.component.html',
  styleUrls: ['./cadastrar-livros.component.scss']
})
export class CadastrarLivrosComponent implements OnInit {

  novoClienteForm!: FormGroup
  autorww: Autor[] = []
  toppings = new FormControl();
  autor: Autor[] = [];
  livros: Livro = {
    nomeLivro: '',
    anoPublicacao: '',
    nomeEditora: '',
    ISBN: 0,
    quantidade: 0,
    autor: undefined
  }
  constructor(
    private service: LivrosService,
    private router: Router,
    private autorService: AutoresService
  ) { }

  ngOnInit(): void {
    this.autorService.listarAutores().subscribe(
      autores => {
        this.autor = autores
      }
    )
    this.novoClienteForm = new FormGroup({
      nomeLivro: new FormControl(),
      nomeEditora: new FormControl(),
      autor: new FormControl(),
      anoPublicacao: new FormControl(),
      quantidade: new FormControl(),
      ISBN: new FormControl()
   })
  }


  submit(form: any){
    const novoLivro = this.novoClienteForm.getRawValue() as Livro;
          this.service.cadastrarLivro(novoLivro).subscribe(
            sucsess => {
              this.service.showMessage('Cliente cadastrado com sucesso')
              this.router.navigate(['/livros/'])
            },
            error => {
              this.service.showMessage('Erro')
              console.log(error)
            }
          )
    }
}
