package br.com.stefanini.developerup.dto;

import br.com.stefanini.developerup.model.Autor;

public class LivroDto {

	private String nomeLivro;
	
	private String anoPublicacao;

	private String nomeEditora;

	private Long ISBN;

	private Long quantidade;
	
	private Autor autor;

	
	public LivroDto() {
		super();
	}

	public LivroDto(String nomeLivro, String anoPublicacao, String nomeEditora, Long iSBN, Long quantidade, Autor autor) {
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
