package br.com.stefanini.developerup.dto;

import br.com.stefanini.developerup.model.Cliente;
import br.com.stefanini.developerup.model.Livro;

public class EmprestimoDto {

	private Long id;
	

	private Cliente cliente;
	
	private Livro livro;
	
	
	private String dataInicio;

	public EmprestimoDto() {
		super();
	}


	public EmprestimoDto(Cliente cliente, String dataInicio,Long id) {
		this.cliente = cliente;
		this.dataInicio = dataInicio;
		this.id = id;
	}

	public Cliente getCliente() {
		return cliente;
	}


	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}


	public Livro  getLivro() {
		return livro;
	}


	public void setLivro(Livro livro) {
		this.livro = livro;
	}


	public String getDataInicio() {
		return dataInicio;
	}


	public void setDataInicio(String dataInicio) {
		this.dataInicio = dataInicio;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	
	
	
}
