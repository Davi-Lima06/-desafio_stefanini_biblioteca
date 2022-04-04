import { EmprestimosService } from './../emprestimos.service';
import  Emprestimo  from 'src/app/global/models/emprestimo.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-listar-emprestimos',
  templateUrl: './listar-emprestimos.component.html',
  styleUrls: ['./listar-emprestimos.component.scss']
})
export class ListarEmprestimosComponent implements OnInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator
  dataSource = new MatTableDataSource<Emprestimo>([]);
  tamanho: number = 0;
  displayedColumns = ['cliente', 'livro', 'data','acoes'];
  constructor(
    private service: EmprestimosService
  ) { }

  ngOnInit(): void {
    this.service.listarEmprestimos().subscribe(
      emprestimos => {
        this.tamanho = emprestimos.length
        this.dataSource.data = emprestimos
      }
    )
  }

  applyFilter(event: Event) {

    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {

    this.dataSource.paginator = this.paginator

  }
}
