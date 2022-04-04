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
    contato: ''
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
