import  Autor  from 'src/app/global/models/autor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AutoresService } from './../autores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-autores',
  templateUrl: './deletar-autores.component.html',
  styleUrls: ['./deletar-autores.component.scss']
})
export class DeletarAutoresComponent implements OnInit {

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
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('parametro')
    this.service.listarUmAutor(id).subscribe(
      autor => {
        this.autor = autor
      }
    )
  }

  submit(form:any){

    this.service.deletar(this.autor.ISNI).subscribe(
      sucesso => {
        this.service.showMessage('Autor deletado com sucesso')
        this.router.navigate(['/autores'])
      },
      err => {
        console.log(err)
      }
    )

}
}
