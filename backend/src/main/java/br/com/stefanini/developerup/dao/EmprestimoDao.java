package br.com.stefanini.developerup.dao;

import java.util.List;

//
import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.model.Emprestimo;

@RequestScoped
public class EmprestimoDao {

	public List<Emprestimo> list() { // lista todos os Emprestimos
		return Emprestimo.listAll();
	}

	public Emprestimo listarUmEmprestimo(Long parametro) { // lista um empréstimo por id
		return Emprestimo.findById(parametro);
	}

	@Transactional
	public void inserir(Emprestimo emprestimo) { // adiciona um novo empréstimo (método de pegar livroemprestado)
		emprestimo.persist();
	}

	@Transactional
	public Boolean deletar(Long parametro) { // deleta um emprestimo (método de devolver livro)

		return Emprestimo.deleteById(parametro);

	}

}
