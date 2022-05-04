import { tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Cliente from 'src/app/global/models/cliente.model';
import { ClienteService as ClienteService } from '../clientes.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.scss'],
})
export class ListarClientesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  dataSource = new MatTableDataSource<Cliente>([]);
  tamanho: number = 0;
  clientes: Cliente[] = [];
  displayedColumns = ['nome', 'email', 'contato', 'acoes'];

  constructor(private clienteApi: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientesPaginator();
    this.clienteApi.listarClientes().subscribe((clientes) => {
      this.tamanho = clientes.length;
      this.dataSource.data = clientes;
    });
  }

  carregarClientesPaginator() {
    this.clienteApi
      .listarPaginator(
        this.paginator?.pageIndex ?? 0,
        this.paginator?.pageSize ?? 5
      )
      .subscribe((res) => {
        this.clientes = res;
      });
  }
  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
   // console.log(this.dataSource.data);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
