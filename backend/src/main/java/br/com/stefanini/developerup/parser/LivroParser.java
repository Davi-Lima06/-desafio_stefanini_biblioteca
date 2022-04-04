package br.com.stefanini.developerup.parser;

import br.com.stefanini.developerup.dto.LivroDto;
import br.com.stefanini.developerup.model.Livro;

public class LivroParser {
	public static LivroParser get() {
		return new LivroParser();
	}

	public LivroDto dto(Livro entidade) {
		LivroDto dto = new LivroDto();

		dto.setNomeLivro(entidade.getNomeLivro());
		dto.setNomeEditora(entidade.getNomeEditora());
		dto.setAnoPublicacao(entidade.getAnoPublicacao());
		dto.setISBN(entidade.getISBN());
		dto.setAutor(entidade.getAutor());
		dto.setQuantidade(entidade.getQuantidade());

		return dto;
	}
	
	public Livro parseLivro(LivroDto entidade) {
		Livro dto = new Livro();

		dto.setNomeLivro(entidade.getNomeLivro());
		dto.setNomeEditora(entidade.getNomeEditora());
		dto.setAnoPublicacao(entidade.getAnoPublicacao());
		dto.setISBN(entidade.getISBN());
		dto.setAutor(entidade.getAutor());
		dto.setQuantidade(entidade.getQuantidade());

		return dto;
	}
}
