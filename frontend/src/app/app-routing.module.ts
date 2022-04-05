import { CadastrarEmprestimosComponent } from './views/emprestimos/cadastrar-emprestimos/cadastrar-emprestimos.component';
import { DevolverEmprestimosComponent } from './views/emprestimos/devolver-emprestimos/devolver-emprestimos.component';
import { DetalhesEmprestimosComponent } from './views/emprestimos/detalhes-emprestimos/detalhes-emprestimos.component';
import { ListarEmprestimosComponent } from './views/emprestimos/listar-emprestimos/listar-emprestimos.component';
import { DeletarLivrosComponent } from './views/livros/deletar-livros/deletar-livros.component';
import { EditarLivrosComponent } from './views/livros/editar-livros/editar-livros.component';
import { CadastrarLivrosComponent } from './views/livros/cadastrar-livros/cadastrar-livros.component';
import { DeletarAutoresComponent } from './views/autores/deletar-autores/deletar-autores.component';
import { EditarAutoresComponent } from './views/autores/editar-autores/editar-autores.component';
import { CadastrarAutoresComponent } from './views/autores/cadastrar-autores/cadastrar-autores.component';
import { DeletarClientesComponent } from './views/clientes/deletar-clientes/deletar-clientes.component';
import { EditarClientesComponent } from './views/clientes/editar-clientes/editar-clientes.component';
import { CadastrarClientesComponent } from './views/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './views/clientes/listar-clientes/listar-clientes.component';
import { HomeComponent } from './views/home/home.component';
import { ListarAutoresComponent } from './views/autores/listar-autores/listar-autores.component';
import { ListarLivrosComponent } from './views/livros/listar-livros/listar-livros.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { pageTitle: 'Página Inicial' },
  },
  {
    path: 'clientes/listar',
    component: ListarClientesComponent,
    data: { pageTitle: 'Listar Clientes' },
  },
  {
    path: 'clientes/cadastrar',
    component: CadastrarClientesComponent,
    data: { pageTitle: 'Cadastrar Clientes' },
  },
  {
    path: 'clientes/editar/:parametro',
    component: EditarClientesComponent,
    data: { pageTitle: 'Editar Clientes' },
  },
  {
    path: 'clientes/deletar/:parametro',
    component: DeletarClientesComponent,
    data: { pageTitle: 'Deletar Clientes' },
  },
  {
    path: 'autores/listar',
    component: ListarAutoresComponent,
    data: { pageTitle: 'listar autores' },
  },
  {
    path: 'autores/cadastrar',
    component: CadastrarAutoresComponent,
    data: { pageTitle: 'cadastrar autores' },
  },
  {
    path: 'autores/editar/:parametro',
    component: EditarAutoresComponent,
    data: { pageTitle: 'editar autores' },
  },
  {
    path: 'autores/deletar/:parametro',
    component: DeletarAutoresComponent,
    data: { pageTitle: 'deletar autores' },
  },
  {
    path: 'livros/listar',
    component: ListarLivrosComponent,
    data: { pageTitle: 'listar livros' },
  },
  {
    path: 'livros/cadastrar',
    component: CadastrarLivrosComponent,
    data: { pageTitle: 'cadastrar livros' },
  },
  {
    path: 'livros/editar/:parametro',
    component: EditarLivrosComponent,
    data: { pageTitle: 'editar livros' },
  },
  {
    path: 'livros/deletar/:parametro',
    component: DeletarLivrosComponent,
    data: { pageTitle: 'deletar livros' },
  },
  {
    path: 'emprestimos/listar',
    component: ListarEmprestimosComponent,
    data: { pageTitle: 'listar livros' },
  },
  {
    path: 'emprestimos/cadastrar',
    component: CadastrarEmprestimosComponent,
    data: { pageTitle: 'cadastrar emprestimo' },
  },
  {
    path: 'emprestimos/detalhes/:parametro',
    component: DetalhesEmprestimosComponent,
    data: { pageTitle: 'detalhes emprestimo' },
  },
  {
    path: 'emprestimos/devolver/:parametro',
    component: DevolverEmprestimosComponent,
    data: { pageTitle: 'devolver livros' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
