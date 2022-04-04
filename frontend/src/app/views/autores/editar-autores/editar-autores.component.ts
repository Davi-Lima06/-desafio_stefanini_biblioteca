import { Router, ActivatedRoute } from '@angular/router';
import { AutoresService } from './../autores.service';
import  Autor  from 'src/app/global/models/autor.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-autores',
  templateUrl: './editar-autores.component.html',
  styleUrls: ['./editar-autores.component.scss']
})
export class EditarAutoresComponent implements OnInit {


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

    this.service.editar(this.autor).subscribe(
      sucesso => {
        this.service.showMessage('Autor editado com sucesso')
        this.router.navigate(['/autores'])
      },
      err => {
        console.log(err)
      }
    )

}
}
