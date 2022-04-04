
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Autor from 'src/app/global/models/autor.model';
import { AutoresService } from '../autores.service';

@Component({
  selector: 'app-listar-autores',
  templateUrl: './listar-autores.component.html',
  styleUrls: ['./listar-autores.component.scss']
})
export class ListarAutoresComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator
  dataSource = new MatTableDataSource<Autor>([]);
  tamanho: number = 0;

  autores: Autor[] = [];
  displayedColumns = ['nome', 'isni', 'email','data','acoes'];

  constructor(
    private service: AutoresService
  ) { }

  ngOnInit(): void {

    this.service.listarAutores().subscribe(
      autores => {
        this.tamanho = autores.length
        this.dataSource.data = autores
      }
    )
  }

  applyFilter(event: Event) {

    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();
    console.log(this.dataSource.filter);

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator

  }

}
