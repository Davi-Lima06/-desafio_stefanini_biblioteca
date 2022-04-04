import { Router, ActivatedRoute } from '@angular/router';
import { AutoresService } from './../../autores/autores.service';
import { LivrosService } from './../livros.service';
import  Livro  from 'src/app/global/models/livro.model';
import  Autor  from 'src/app/global/models/autor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-livros',
  templateUrl: './deletar-livros.component.html',
  styleUrls: ['./deletar-livros.component.scss']
})
export class DeletarLivrosComponent implements OnInit {

  autores: Autor[] = []

  livro: Livro = {
    nomeLivro: '',
    anoPublicacao: '',
    nomeEditora: '',
    ISBN: 0,
    quantidade: 0,
    autor: undefined
  }

  constructor(
    private service: LivrosService,
    private autorService: AutoresService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.autorService.listarAutores().subscribe(
      autor =>{
        this.autores = autor
      }
    )
    const id = this.activatedRoute.snapshot.paramMap.get('parametro')
    this.service.listarUmLivro(id).subscribe(
      autor => {
        this.livro = autor
      }
    )
  }

  submit(form:any){

    this.service.deletar(this.livro.ISBN).subscribe(
      sucesso => {
        this.service.showMessage('Livro deletado com sucesso')
        this.router.navigate(['/livros'])
      },
      err => {
        console.log(err)
      }
    )

}

}
