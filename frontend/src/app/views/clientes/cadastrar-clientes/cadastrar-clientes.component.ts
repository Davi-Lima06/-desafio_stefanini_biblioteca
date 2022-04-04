
import { FormControl, FormGroup, Validators } from '@angular/forms';
import  Cliente  from 'src/app/global/models/cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-cadastrar-clientes',
  templateUrl: './cadastrar-clientes.component.html',
  styleUrls: ['./cadastrar-clientes.component.scss']
})
export class CadastrarClientesComponent implements OnInit {

  novoClienteForm!: FormGroup

  cliente: Cliente = {
    nome: '',
    email: '',
    contato: ''
  }

  debounce: Subject<string> = new Subject<string>();

  constructor(
    private service: ClienteService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.novoClienteForm = new FormGroup({
      nome: new FormControl(this.cliente.nome,[
        Validators.required,Validators.maxLength(20)
      ]),
      email: new FormControl(this.cliente.email,[
        Validators.required,Validators.email,

      ]),
      contato: new FormControl(this.cliente.contato,[
        Validators.required
      ]),
  });

  }

  submit(form: any){
    const novoCliente = this.novoClienteForm.getRawValue() as Cliente;
          this.service.cadastrarCliente(novoCliente).subscribe(
            sucsess => {
              this.service.showMessage('Cliente cadastrado com sucesso')
              this.router.navigate(['/clientes/listar'])
            },
            error => {
              this.service.showMessage('Email já cadastrado')
              console.log(error)
            }
          )



  }

}
