package br.com.stefanini.developerup.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

@Entity
@Table(name = "livro")
public class Livro extends PanacheEntityBase {
	@Column(name = "nomeLivro")
	private String nomeLivro;

	@Column(name = "anoPublicacao")
	private String anoPublicacao;

	@Column(name = "editora")
	private String nomeEditora;

	@Id
	private Long ISBN;

	@Column(name = "quantidadeExemplares")
	private Long quantidade;

	@ManyToOne
	@JoinColumn(name = "autor_id")
	private Autor autor;

	public Livro() {
		super();
	}

	public Livro(String nomeLivro, String anoPublicacao, String nomeEditora, Long iSBN, Long quantidade, Autor autor) {
		super();
		this.nomeLivro = nomeLivro;
		this.anoPublicacao = anoPublicacao;
		this.nomeEditora = nomeEditora;
		ISBN = iSBN;
		this.quantidade = quantidade;
		this.autor = autor;
	}

	public String getNomeLivro() {
		return nomeLivro;
	}

	public void setNomeLivro(String nomeLivro) {
		this.nomeLivro = nomeLivro;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}

	public String getAnoPublicacao() {
		return anoPublicacao;
	}

	public void setAnoPublicacao(String anoPublicacao) {
		this.anoPublicacao = anoPublicacao;
	}

	public String getNomeEditora() {
		return nomeEditora;
	}

	public void setNomeEditora(String nomeEditora) {
		this.nomeEditora = nomeEditora;
	}

	public Long getISBN() {
		return ISBN;
	}

	public void setISBN(Long iSBN) {
		ISBN = iSBN;
	}

	public Long getQuantidade() {
		return quantidade;
	}

	public void setQuantidade(Long quantidade) {
		this.quantidade = quantidade;
	}

}
