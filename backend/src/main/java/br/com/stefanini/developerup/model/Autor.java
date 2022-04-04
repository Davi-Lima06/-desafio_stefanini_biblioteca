package br.com.stefanini.developerup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "autor")
public class Autor extends PanacheEntityBase {

	@Column(name = "nome")
	private String nome;

	@Id
	private Long ISNI;

	@Column(name = "email")
	private String email;

	@Column(name = "dataNascimento")
	private String dataNascimento;

	@Column(name = "biografia")
	private String biografia;

	public Autor() {
		super();
	}

	public Autor(String nome, Long iSNI, String email, String dataNascimento, String biografia) {
		super();
		this.nome = nome;
		ISNI = iSNI;
		this.email = email;
		this.dataNascimento = dataNascimento;
		this.biografia = biografia;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Long getISNI() {
		return ISNI;
	}

	public void setISNI(Long iSNI) {
		ISNI = iSNI;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getBiografia() {
		return biografia;
	}

	public void setBiografia(String biografia) {
		this.biografia = biografia;
	}
}
