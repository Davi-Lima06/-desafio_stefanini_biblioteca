import { map } from 'rxjs/operators';
import  ApiUrl  from 'src/app/global/constant/api-urls.constant';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Emprestimo from 'src/app/global/models/emprestimo.model';

@Injectable({
  providedIn: 'root'
})
export class EmprestimosService {

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

  listarEmprestimos(): Observable<Emprestimo[]> {
    return this.http
      .get<Emprestimo[]>(ApiUrl.urlBaseEmprestimos)
      .pipe(map((res) => res.map((c, i) => ({ ...c, posicao: i }))));
  }

  listarUmEmprestimo(parametro: any):Observable<Emprestimo>{
    return this.http.get<Emprestimo>(`${ApiUrl.urlBaseEmprestimos}/${parametro}`)
  }

  cadastrarEmprestimo(emprestimo: Emprestimo):Observable<Emprestimo>{
    return this.http.post<Emprestimo>(ApiUrl.urlBaseEmprestimos,emprestimo)
  }

  deletar(parametro: any):Observable<Emprestimo>{
    return this.http.delete<Emprestimo>(`${ApiUrl.urlBaseEmprestimos}/${parametro}`)
  }
}
