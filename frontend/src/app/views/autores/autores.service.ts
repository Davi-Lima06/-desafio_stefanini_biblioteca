import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Autor from 'src/app/global/models/autor.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'x', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  listarAutores(): Observable<Autor[]> {
    return this.http
      .get<Autor[]>(ApiUrl.urlBaseAutor)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarPaginator(pageIndex:any, pageSize: any): Observable<Autor[]> {
    console.log(pageIndex, pageSize)
    return this.http
      .get<Autor[]>(`${ApiUrl.urlBaseAutor}/${pageIndex}/${pageSize}`)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarUmAutor(parametro: any):Observable<Autor>{
    return this.http.get<Autor>(`${ApiUrl.urlBaseAutor}/${parametro}`)
  }

  cadastrarAutor(autor: Autor):Observable<Autor>{
    return this.http.post<Autor>(ApiUrl.urlBaseAutor,autor)
  }

  editar(autor: Autor):Observable<Autor>{
    return this.http.put<Autor>(`${ApiUrl.urlBaseAutor}/${autor.ISNI}`, autor)
  }

  deletar(parametro: any):Observable<Autor>{
    return this.http.delete<Autor>(`${ApiUrl.urlBaseAutor}/${parametro}`)
  }
}
