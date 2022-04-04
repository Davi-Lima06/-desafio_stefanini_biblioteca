package br.com.stefanini.developerup.dao;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.model.Cliente;
import io.quarkus.hibernate.orm.panache.PanacheQuery;

/**
 * @author Danilo Dorgam email danilodorgam@gmail.com created 30/03/2022
 * @version 0.1.0
 */
@RequestScoped
public class ClienteDao {
	public List<Cliente> listar() { // lista todos os clientes
		return Cliente.listAll();
	}
	
	public List<Cliente> listar(int pageIndex, int pageSize) { // lista todos os clientes
		PanacheQuery<Cliente> cliente = Cliente.findAll();
		return cliente.page(pageIndex, pageSize).list();
	}

	public Cliente listarUmCliente(String id) { // lista um cliente por id
		return Cliente.findById(id);
	}	

	@Transactional
	public void inserir(Cliente cliente) throws Exception { // insere um novo cliente
		Cliente cli = Cliente.findById(cliente.getEmail());
		if(listar().contains(cli)) {
			throw new Exception("já existe um cliente com esse email");
		}else {
			cliente.setLivrosEmprestados(0);
			cliente.persist();
		}
		
	}

	@Transactional
	public Boolean deletar(String parametro) { // deleta um cliente pelo id
		return Cliente.deleteById(parametro);
	}

	@Transactional
	public void atualizar(Cliente cliente, String parametro) { // atualiza um cliente existente pelo id
		Cliente.update("nome = ?1, contato = ?2, email = ?3 where email = ?4 ", cliente.getNome(),
				cliente.getContato(),cliente.getEmail() , parametro);
	}

	@Transactional
	public void emprestarLivro(String parametro) throws Exception { // atualiza a quantidade de livros que o cliente pegou emprestado
		Cliente cliente = listarUmCliente(parametro);
		Integer zero = 3;
		if(cliente.getLivrosEmprestados().equals(zero)) { 
			throw new Exception("o cliente atingiu o número máximo de livros emprestados");
		}else {			
			Cliente.update("livrosEmprestados = ?1 where email = ?2", cliente.getLivrosEmprestados() + 1, parametro);
		}
	}

	@Transactional
	public void devolverLivro(String parametro) { // atualiza a quantidade de livros que o cliente pegou emprestado

		Cliente cliente = listarUmCliente(parametro);
		Cliente.update("livrosEmprestados = ?1 where email = ?2", cliente.getLivrosEmprestados() - 1, parametro);
	}

}
