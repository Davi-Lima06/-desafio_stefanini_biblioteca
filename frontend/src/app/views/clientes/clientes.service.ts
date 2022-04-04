import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Cliente from 'src/app/global/models/cliente.model';
import ApiUrl from 'src/app/global/constant/api-urls.constant';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
    ) {}

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'x', {
      duration: 4000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(ApiUrl.urlBaseCliente)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarPaginator(pageIndex:any, pageSize: any): Observable<Cliente[]> {
    console.log(pageIndex, pageSize)
    return this.http
      .get<Cliente[]>(`${ApiUrl.urlBaseCliente}/${pageIndex}/${pageSize}`)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarUmCliente(parametro: any):Observable<Cliente>{
    return this.http.get<Cliente>(`${ApiUrl.urlBaseCliente}/${parametro}`)
  }

  cadastrarCliente(cliente: Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(ApiUrl.urlBaseCliente,cliente)
  }

  editar(cliente: Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${ApiUrl.urlBaseCliente}/${cliente.email}`, cliente)
  }

  deletar(parametro: any):Observable<Cliente>{
    return this.http.delete<Cliente>(`${ApiUrl.urlBaseCliente}/${parametro}`)
  }
}
