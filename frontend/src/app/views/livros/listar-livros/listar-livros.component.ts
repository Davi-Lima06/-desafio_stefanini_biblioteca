import { LivrosService } from './../livros.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import Livro from 'src/app/global/models/livro.model';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.scss']
})
export class ListarLivrosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator
  dataSource = new MatTableDataSource<Livro>([]);
  tamanho: number = 0;
  displayedColumns = ['nome', 'autor', 'ISBN', 'data','quantidade','acoes'];
  constructor(
    private service: LivrosService
  ) { }

  ngOnInit(): void {
    this.service.listarLivros().subscribe(
      livros => {
        this.tamanho = livros.length
        this.dataSource.data = livros
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
