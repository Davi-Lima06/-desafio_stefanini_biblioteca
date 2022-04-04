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

    this.service.editar(this.livro).subscribe(
      sucesso => {
        this.service.showMessage('Autor editado com sucesso')
        this.router.navigate(['/livros'])
      },
      err => {
        console.log(err)
      }
    )

}

}
