import { EmprestimosService } from './../emprestimos.service';
import Emprestimo from 'src/app/global/models/emprestimo.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import Cliente from 'src/app/global/models/cliente.model';
import Livro from 'src/app/global/models/livro.model';
import { LivrosService } from '../../livros/livros.service';
import { ClienteService } from '../../clientes/clientes.service';

@Component({
  selector: 'app-listar-emprestimos',
  templateUrl: './listar-emprestimos.component.html',
  styleUrls: ['./listar-emprestimos.component.scss'],
})
export class ListarEmprestimosComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  emprestimo: Emprestimo[] = []
  dataSource = new MatTableDataSource<Emprestimo>([]);
  dataSource1 = new MatTableDataSource<Cliente>([]);
  dataSource2 = new MatTableDataSource<Livro>([]);
  tamanhoEm: number = 0;
  tamanhoCli: number = 0;
  tamanho: number = 0;

  clickEmprestimo: boolean = true;
  clickCliente: boolean = false;

  displayedColumns = ['cliente', 'livro', 'data', 'acoes'];
  constructor(
    private service: EmprestimosService,

    ) {}

  ngOnInit(): void {
    this.service.listarEmprestimos().subscribe((emprestimos) => {
      this.tamanhoEm = emprestimos.length;
      this.dataSource.data = emprestimos;
      this.emprestimo = emprestimos
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    console.log(this.dataSource.data);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
