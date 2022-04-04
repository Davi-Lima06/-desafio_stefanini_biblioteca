import { ClienteService } from './../clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import  Cliente  from 'src/app/global/models/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-clientes',
  templateUrl: './deletar-clientes.component.html',
  styleUrls: ['./deletar-clientes.component.scss']
})
export class DeletarClientesComponent implements OnInit {

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

  submit(form: any){
    if(this.cliente.livrosEmprestados){
      this.service.showMessage('Não é possivel deletar o cliente pois ele ainda não devolveu todos os livros')
    }else{
      this.service.deletar(this.cliente.email).subscribe(
        sucesso => {
          this.router.navigate(['/'])
        }
      )
    }

  }

}
