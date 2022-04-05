import { EmprestimosService } from './../emprestimos.service';
import  Emprestimo  from 'src/app/global/models/emprestimo.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-emprestimos',
  templateUrl: './detalhes-emprestimos.component.html',
  styleUrls: ['./detalhes-emprestimos.component.scss']
})
export class DetalhesEmprestimosComponent implements OnInit {


  emprestimos: Emprestimo ={
    id: 0,
    cliente: undefined,
    livro: undefined,
    dataInicio: ''
  }

  constructor(
    private emprestimoService: EmprestimosService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('parametro')
    console.log(id)
    this.emprestimoService.listarUmEmprestimo(id).subscribe(
      emprestimo => {
        console.log(emprestimo)
        this.emprestimos = emprestimo
      }
    )
  }


}
