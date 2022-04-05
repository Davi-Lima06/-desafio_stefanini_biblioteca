import { AbstractControl } from '@angular/forms';
import { TelefoneValidator } from 'src/app/global/validators/tefefone.validator';
import { ActivatedRoute, Router } from '@angular/router';
import  Cliente  from 'src/app/global/models/cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.scss']
})
export class EditarClientesComponent implements OnInit {



  cliente: Cliente = {
    nome: '',
    email: '',
    contato: '',
    livrosEmprestados: 0

  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('parametro')
    this.service.listarUmCliente(id).subscribe(
      cliente => {
        this.cliente = cliente
      }
    )
  }

  validar(control: any){
    if(control.value.trim() && !/^\([1-9]{2}\) ([1-9])[0-9]{2}\-[0-9]{3}\-[0-9]{3}$/.test(control.value)){
      return  true
    }
    return false
  }

  mascara(input:any){
    let inputLength = input.value.length

    if(inputLength == 0){
      input.value += '('
    }else if(inputLength == 3){
      input.value += ') '
    }else if (inputLength == 8 || inputLength == 12 ) {
        input.value += '-'
    }
   }

  submit(form:any){

      this.service.editar(this.cliente).subscribe(
        sucesso => {
          this.service.showMessage('Cliente editado com sucesso')
          this.router.navigate(['/clientes/listar'])
        },
        err => {
          console.log(err)
        }
      )

  }

}
