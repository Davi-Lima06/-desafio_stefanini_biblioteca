package br.com.stefanini.developerup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "emprestimo")
public class Emprestimo extends PanacheEntityBase {

	@Id
	@GeneratedValue
	private Long id;

	@OneToOne
	private Cliente cliente;

	@OneToOne
	@JoinColumn(name = "livro")
	private Livro livro;

	@Column(name = "dataInicio")
	private String dataInicio;

	public Emprestimo() {
		super();
	}

	public Emprestimo(Cliente cliente, String dataInicio, Long id) {
		super();
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

	public Livro getLivro() {
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
