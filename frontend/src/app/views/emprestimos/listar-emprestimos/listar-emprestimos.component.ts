import { EmprestimosService } from './../emprestimos.service';
import Emprestimo from 'src/app/global/models/emprestimo.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
import ModeloEmprestimo from 'src/app/global/models/modeloEmprestimo.model';

@Component({
  selector: 'app-listar-emprestimos',
  templateUrl: './listar-emprestimos.component.html',
  styleUrls: ['./listar-emprestimos.component.scss'],
})
export class ListarEmprestimosComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  emprestimo: ModeloEmprestimo[] = []
  dataSource = new MatTableDataSource<ModeloEmprestimo>([]);
  tamanho: number = 0;
  displayedColumns = ['cliente', 'livro', 'data', 'acoes'];
  constructor(private service: EmprestimosService, private render: Renderer2) {}

  ngOnInit(): void {
    this.service.listarEmprestimos().subscribe((emprestimos) => {
      this.tamanho = emprestimos.length;
      this.dataSource.data = emprestimos;
      this.emprestimo = emprestimos
    });
  }

  applyFilter(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase();
    console.log(this.dataSource.filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
