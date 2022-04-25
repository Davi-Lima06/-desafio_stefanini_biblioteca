import { ValidarDataService } from './../../../core/services/validar-data.service';
import { AutoresService } from './../../autores/autores.service';
import  Autor  from 'src/app/global/models/autor.model';
import { Router } from '@angular/router';
import { LivrosService } from './../livros.service';
import  Livro  from 'src/app/global/models/livro.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cadastrar-livros',
  templateUrl: './cadastrar-livros.component.html',
  styleUrls: ['./cadastrar-livros.component.scss']
})
export class CadastrarLivrosComponent implements OnInit {

  @ViewChild('isbn')
  isnb!: ElementRef;

  nomeLivro: string = ''
  qtLivros: number = 0
  novoClienteForm!: FormGroup
  valido: boolean = false
  invalido: boolean = false
  autor: Autor[] = [];
  livros: Livro = {
    nomeLivro: '',
    anoPublicacao: '',
    nomeEditora: '',
    ISBN: '',
    quantidade: 0,
    autor: undefined
  }
  constructor(
    private service: LivrosService,
    private router: Router,
    private autorService: AutoresService,
    private dataService: ValidarDataService
  ) { }

  ngOnInit(): void {
    this.autorService.listarAutores().subscribe(
      autores => {
        this.autor = autores
      }
    )
    this.novoClienteForm = new FormGroup({
      nomeLivro: new FormControl(this.livros.nomeLivro,[
        Validators.required,
        Validators.maxLength(50)
      ]),
      nomeEditora: new FormControl(this.livros.nomeEditora,[
        Validators.required,
        Validators.maxLength(50)
      ]),
      autor: new FormControl(this.livros.autor,[
        Validators.required
      ]),
      anoPublicacao: new FormControl(this.livros.anoPublicacao,[
        Validators.required
      ]),
      quantidade: new FormControl(this.livros.quantidade,[
        Validators.required
      ]),
      ISBN: new FormControl(this.livros.ISBN,[
        Validators.required,
        Validators.minLength(10),
        // Validators.maxLength(13)
      ])
   })
  }

  parseInt(valor: any){
    var convertido = parseInt(valor)
    return convertido
  }

  validaData(data:any):boolean{
    return this.dataService.validaData(data)
  }

  valor(even:any){
    this.service.validarISBN(even).subscribe(
      e => {
        this.nomeLivro = e.title
        this.qtLivros = e.number_of_pages
        this.valido = true
        this.invalido = false
        console.log(even)
      },
      erro =>{
        this.valido = false
        this.invalido = true
      }
    )
  }

  submit(form: any){

    const novoLivro = this.novoClienteForm.getRawValue() as Livro;
         if(this.valido){
          this.service.cadastrarLivro(novoLivro).subscribe(
            sucsess => {
              this.service.showMessage('Livro cadastrado com sucesso')
              this.router.navigate(['/livros/listar'])
            },
            error => {
              this.service.showMessage('ISNB já cadastrado')
              console.log(error)
            }
          )
         }else{
          this.service.showMessage('ISNB inválido.')
         }
    }
}
