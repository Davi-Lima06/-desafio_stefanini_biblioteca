package br.com.stefanini.developerup.dao;

import java.util.List;

import javax.enterprise.context.RequestScoped;

import br.com.stefanini.developerup.model.Livro;
import io.quarkus.hibernate.orm.panache.PanacheQuery;

@RequestScoped
public class LivroDao {

	public List<Livro> list() { // lista todos os livros
		return Livro.listAll();
	}
	
	public List<Livro> list(int pageIndex, int pageSize) { // lista todos os livros
		PanacheQuery<Livro> livro = Livro.findAll();
		
		return livro.page(pageIndex, pageSize).list();
	}

	public Livro listaUmLivro(Long id) { // lista um livro por id
		return Livro.findById(id);
	}

	public void inserir(Livro livro) { // insere um novo livro
		livro.persist();
	}

	public Boolean deletar(Long parametro) { // deleta um livro por id

		return Livro.deleteById(parametro);

	}

	public void atualizar(Livro livro, Long parametro) { // atualiza um Livro por id
		Livro.update(
				"nomeLivro = ?1, autor = ?2, anoPublicacao = ?3, editora = ?4, quantidadeExemplares = ?5 where ISBN = ?6",
				livro.getNomeLivro(), livro.getAutor(), livro.getAnoPublicacao(), livro.getNomeEditora(),
				 livro.getQuantidade(), parametro);
	}

	public void emprestarLivro(Long parametro,Livro livro) throws Exception { // faz a verificacao se à livros disponiveis para emprestimo e realiza os empréstimos
		
			Livro.update("quantidadeExemplares = ?1 where ISBN = ?2", livro.getQuantidade() - 1, parametro);
		
	}

	public void devolverLivro(Long parametro) { // recebe o livro que foi emprestado ao cliente
		Livro livro = listaUmLivro(parametro);
		Livro.update("quantidadeExemplares = ?1 where ISBN = ?2", livro.getQuantidade() + 1, parametro);
	}

}
