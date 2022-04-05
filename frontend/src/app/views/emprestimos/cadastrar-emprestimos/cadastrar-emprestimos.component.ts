import { ValidarDataService } from './../../../core/services/validar-data.service';
import { Router } from '@angular/router';
import  Livro  from 'src/app/global/models/livro.model';
import Cliente from 'src/app/global/models/cliente.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import Emprestimo from 'src/app/global/models/emprestimo.model';
import { LivrosService } from '../../livros/livros.service';
import { EmprestimosService } from '../emprestimos.service';
import { ClienteService } from '../../clientes/clientes.service';

@Component({
  selector: 'app-cadastrar-emprestimos',
  templateUrl: './cadastrar-emprestimos.component.html',
  styleUrls: ['./cadastrar-emprestimos.component.scss']
})
export class CadastrarEmprestimosComponent implements OnInit {

  clienteLivros: boolean = false;
  quantidade: boolean = false;
  novoEmprestimoForm!: FormGroup
  livros: Livro[] = [];
  clientes: Cliente[] = [];
  emprestimos: Emprestimo = {
    id: 0,
    cliente: undefined,
    livro: undefined,
    dataInicio: ''
  }
  constructor(
    private emprestimosService: EmprestimosService,
    private livroService: LivrosService,
    private clienteService: ClienteService,
    private router: Router,
    private dataService: ValidarDataService
  ) { }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      clientes =>{
        this.clientes = clientes
      }
    )
    this.livroService.listarLivros().subscribe(
      livros => {
        this.livros = livros
      }
    )
    this.novoEmprestimoForm = new FormGroup({
      cliente: new FormControl(this.emprestimos.cliente?.nome,[
        Validators.required
      ]),
      livro:  new FormControl(this.emprestimos.livro?.autor,[
        Validators.required
      ]),
      dataInicio: new FormControl(this.emprestimos.dataInicio,[
        Validators.required
      ])
    })
  }
  valor(valor:any){
      if(valor == 0){
        this.quantidade = true
      }
  }
  livrosClientes(valor:any){
    if(valor == 3){
      this.clienteLivros = true
    }
  }

  validaData(data: any){
   return this.dataService.validaDataEmprestimo(data)
  }

  submit(form: any){
    const novoLivro = this.novoEmprestimoForm.getRawValue() as Emprestimo;
          this.emprestimosService.cadastrarEmprestimo(novoLivro).subscribe(
            sucsess => {
              this.emprestimosService.showMessage('Emprestimo feito com sucesso')
              this.router.navigate(['/emprestimos/listar'])
            },
            error => {
              if(this.quantidade){
                this.emprestimosService.showMessage('Não há cópias desse livro')
              }else if(this.clienteLivros){
                this.emprestimosService.showMessage('O cliente já atingiu o limite de livros')
              } else{
                this.emprestimosService.showMessage('O cliente já pegou esse livro emprestado')
              }
            }
          )
    }

}
