import { HttpHeaders } from '@angular/common/http';
import { MessagemService } from './../../../core/services/messagem.service';
import { ValidarDataService } from './../../../core/services/validar-data.service';
import { EmailValidator } from 'src/app/global/validators/email.validator';
import { Router } from '@angular/router';
import { AutoresService } from './../autores.service';
import  Autor  from 'src/app/global/models/autor.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { INSIValidator } from 'src/app/global/validators/isni.validator';

@Component({
  selector: 'app-cadastrar-autores',
  templateUrl: './cadastrar-autores.component.html',
  styleUrls: ['./cadastrar-autores.component.scss']
})
export class CadastrarAutoresComponent implements OnInit {

  novoAutorForm!: FormGroup

  autor: Autor = {
    nome: '',
    ISNI: '',
    email: '',
    dataNascimento: '',
    biografia: ''
  }
  constructor(
    private service: AutoresService,
    private router: Router,
    private dataService: ValidarDataService,
    private messagem: MessagemService
  ) { }

  ngOnInit(): void {
    this.novoAutorForm = new FormGroup({
      nome: new FormControl(this.autor.nome,[
        Validators.required,
        Validators.maxLength(50)
      ]),
      ISNI: new FormControl(this.autor.ISNI,[
        Validators.required,
        INSIValidator,
        Validators.minLength(10)
      ]),
      email: new FormControl(this.autor.email,[
        Validators.required,
        EmailValidator
      ]),
      dataNascimento: new FormControl(this.autor.dataNascimento,[
        Validators.required
      ]),
      biografia: new FormControl(this.autor.biografia,[
        Validators.required,
        Validators.maxLength(200)
      ]),

    })
  }

  validaData(data: any):boolean{
    return this.dataService.validaData(data);
 }

  submit(form: any){
    const novoAutor = this.novoAutorForm.getRawValue() as Autor;
          this.service.cadastrarAutor(novoAutor).subscribe(
            sucsess => {
              console.log(sucsess.status)
              this.messagem.success('Autor cadastrado com sucesso')
              this.router.navigate(['/autores/listar'])
            },
            error => {
              if(error.status == 400){
              this.service.showMessage('Email ou ISNB já cadastrado')
              }else if(error.status == 500){
                this.service.showMessage('Problema no servidor')
                console.log(error)
              }
            }
          )
  }

}
