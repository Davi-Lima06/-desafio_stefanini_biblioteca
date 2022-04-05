import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Livro from 'src/app/global/models/livro.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';


@Injectable({
  providedIn: 'root'
})
export class LivrosService {

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

  listarLivros(): Observable<Livro[]> {
    return this.http
      .get<Livro[]>(ApiUrl.urlBaseLivros)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarPaginator(pageIndex:any, pageSize: any): Observable<Livro[]> {
    console.log(pageIndex, pageSize)
    return this.http
      .get<Livro[]>(`${ApiUrl.urlBaseLivros}/${pageIndex}/${pageSize}`)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarUmLivro(parametro: any):Observable<Livro>{
    return this.http.get<Livro>(`${ApiUrl.urlBaseLivros}/${parametro}`)
  }

  cadastrarLivro(livro: Livro):Observable<Livro>{
    console.log(livro)
    return this.http.post<Livro>(ApiUrl.urlBaseLivros,livro)
  }

  editar(livro: Livro):Observable<Livro>{
    return this.http.put<Livro>(`${ApiUrl.urlBaseLivros}/${livro.ISBN}`, livro)
  }

  deletar(parametro: any):Observable<Livro>{
    return this.http.delete<Livro>(`${ApiUrl.urlBaseLivros}/${parametro}`)
  }

  validarISBN(isbn:number):Observable<any>{
    return this.http.get<any>(`${ApiUrl.APIurl}/${isbn}.json`)
  }
}
