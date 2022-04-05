import { ValidarDataService } from './../../../core/services/validar-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import  Emprestimo  from 'src/app/global/models/emprestimo.model';
import { EmprestimosService } from './../emprestimos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devolver-emprestimos',
  templateUrl: './devolver-emprestimos.component.html',
  styleUrls: ['./devolver-emprestimos.component.scss']
})
export class DevolverEmprestimosComponent implements OnInit {

  emprestimos: Emprestimo ={
    id: 0,
    cliente: undefined,
    livro: undefined,
    dataInicio: ''
  }

  constructor(
    private emprestimoService: EmprestimosService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: ValidarDataService
  ) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('parametro')
    this.emprestimoService.listarUmEmprestimo(id).subscribe(
      emprestimo => {
        this.emprestimos = emprestimo
      }
    )
  }

  submit(form:any){
    this.emprestimoService.deletar(this.emprestimos.id).subscribe(
      sucesso => {
        this.router.navigate(["emprestimos/listar"])
        this.emprestimoService.showMessage(`Livro devolvido no dia: ${this.dataService.dataAtual()}` )
      }
    )

}

}
