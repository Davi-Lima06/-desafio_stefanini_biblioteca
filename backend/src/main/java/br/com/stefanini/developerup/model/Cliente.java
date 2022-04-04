package br.com.stefanini.developerup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

/**
 * @author Danilo Dorgam email danilodorgam@gmail.com created 30/03/2022
 * @version 0.1.0
 */
@Entity
@Table(name = "cliente")
public class Cliente extends PanacheEntityBase  {

	@Id
	private String email;

	@Column(name = "nome")
	private String nome;

	@Column(name = "contato")
	private String contato;

	@Column(name = "livrosEmprestados")
	private Integer livrosEmprestados;

	public Cliente() {

	}

	public Cliente(String email, String nome, String contato) {
		super();
		this.email = email;
		this.nome = nome;
		this.contato = contato;

	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getContato() {
		return contato;
	}

	public void setContato(String contato) {
		this.contato = contato;
	}

	public Integer getLivrosEmprestados() {
		return livrosEmprestados;
	}

	public void setLivrosEmprestados(Integer livrosEmprestados) {
		this.livrosEmprestados = livrosEmprestados;
	}

}
