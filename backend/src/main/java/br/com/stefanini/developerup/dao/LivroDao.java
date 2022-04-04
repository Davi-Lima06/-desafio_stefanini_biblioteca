package br.com.stefanini.developerup.dao;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;

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

	@Transactional
	public void inserir(Livro livro) { // insere um novo livro
		livro.persist();
	}

	@Transactional
	public Boolean deletar(Long parametro) { // deleta um livro por id

		return Livro.deleteById(parametro);

	}

	@Transactional
	public void atualizar(Livro livro, Long parametro) { // atualiza um Livro por id
		Livro.update(
				"nomeLivro = ?1, autor = ?2, anoPublicacao = ?3, editora = ?4, quantidadeExemplares = ?5 where ISBN = ?6",
				livro.getNomeLivro(), livro.getAutor(), livro.getAnoPublicacao(), livro.getNomeEditora(),
				 livro.getQuantidade(), parametro);
	}

	@Transactional
	public void emprestarLivro(Long parametro) throws Exception { // faz a verificacao se à livros disponiveis para emprestimo e realiza os empréstimos
		Livro livro = listaUmLivro(parametro);
		Long zero = 0L; 
		if(livro.getQuantidade().equals(zero)) {
			throw new Exception("esse livro não está disponível no momento");
		}else {
			Livro.update("quantidadeExemplares = ?1 where ISBN = ?2", livro.getQuantidade() - 1, parametro);
		}
	}

	@Transactional
	public void devolverLivro(Long parametro) { // recebe o livro que foi emprestado ao cliente
		Livro livro = listaUmLivro(parametro);
		Livro.update("quantidadeExemplares = ?1 where ISBN = ?2", livro.getQuantidade() + 1, parametro);
	}

}
