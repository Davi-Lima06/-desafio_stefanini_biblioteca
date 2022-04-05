
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { ListarClientesComponent } from './views/clientes/listar-clientes/listar-clientes.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CadastrarClientesComponent } from './views/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { EditarClientesComponent } from './views/clientes/editar-clientes/editar-clientes.component';
import { DeletarClientesComponent } from './views/clientes/deletar-clientes/deletar-clientes.component';
import { MensagemComponent } from './global/mensagem/mensagem.component';
import { ListarAutoresComponent } from './views/autores/listar-autores/listar-autores.component';
import { MatListModule} from '@angular/material/list';

import {  MatPaginatorModule } from '@angular/material/paginator';
import { CadastrarAutoresComponent } from './views/autores/cadastrar-autores/cadastrar-autores.component';
import { EditarAutoresComponent } from './views/autores/editar-autores/editar-autores.component';
import { DeletarAutoresComponent } from './views/autores/deletar-autores/deletar-autores.component';
import { CadastrarLivrosComponent } from './views/livros/cadastrar-livros/cadastrar-livros.component';
import { ListarLivrosComponent } from './views/livros/listar-livros/listar-livros.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { EditarLivrosComponent } from './views/livros/editar-livros/editar-livros.component';
import { DeletarLivrosComponent } from './views/livros/deletar-livros/deletar-livros.component';
import { ListarEmprestimosComponent } from './views/emprestimos/listar-emprestimos/listar-emprestimos.component';
import { DetalhesEmprestimosComponent } from './views/emprestimos/detalhes-emprestimos/detalhes-emprestimos.component';
import { DevolverEmprestimosComponent } from './views/emprestimos/devolver-emprestimos/devolver-emprestimos.component';
import { CadastrarEmprestimosComponent } from './views/emprestimos/cadastrar-emprestimos/cadastrar-emprestimos.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    ListarClientesComponent,
    FooterComponent,
    CadastrarClientesComponent,
    EditarClientesComponent,
    DeletarClientesComponent,
    MensagemComponent,
    ListarAutoresComponent,
    CadastrarAutoresComponent,
    EditarAutoresComponent,
    DeletarAutoresComponent,
    CadastrarLivrosComponent,
    ListarLivrosComponent,
    EditarLivrosComponent,
    DeletarLivrosComponent,
    ListarEmprestimosComponent,
    DetalhesEmprestimosComponent,
    DevolverEmprestimosComponent,
    CadastrarEmprestimosComponent


  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,

    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
