import { ValidarDataService } from './../../../core/services/validar-data.service';
import  Autor  from 'src/app/global/models/autor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { LivrosService } from './../livros.service';
import { Component, OnInit } from '@angular/core';
import Livro from 'src/app/global/models/livro.model';
import { AutoresService } from '../../autores/autores.service';

@Component({
  selector: 'app-editar-livros',
  templateUrl: './editar-livros.component.html',
  styleUrls: ['./editar-livros.component.scss']
})
export class EditarLivrosComponent implements OnInit {

  autores: Autor[] = []
  validaAutor:boolean = false
  livro: Livro = {
    nomeLivro: '',
    anoPublicacao: '',
    nomeEditora: '',
    ISBN: 0,
    quantidade: 0,
    autor: undefined
  }

  nomeAutor: string | undefined = ''

  constructor(
    private service: LivrosService,
    private autorService: AutoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: ValidarDataService
  ) { }

  ngOnInit(): void {
    this.autorService.listarAutores().subscribe(
      autor =>{
        this.autores = autor
      }
    )
    const id = this.activatedRoute.snapshot.paramMap.get('parametro')
    this.service.listarUmLivro(id).subscribe(
      livros => {
        this.livro = livros
        this.nomeAutor = livros.autor?.nome
      }
    )
  }

  parseInt(valor: any){
    var convertido = parseInt(valor)
    return convertido
  }

  validaData(data:any):boolean{
    return this.dataService.validaData(data)
  }

  valor(valor: any){
    this.nomeAutor = valor
    this.validaAutor = true
  }

  submit(form:any){

    this.service.editar(this.livro).subscribe(
      sucesso => {
        this.service.showMessage('Livro editado com sucesso')
        this.router.navigate(['/livros/listar'])
      },
      err => {
        console.log(err)
      }
    )

}

}
