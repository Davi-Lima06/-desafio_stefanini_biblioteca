package br.com.stefanini.developerup.parser;

import br.com.stefanini.developerup.dto.AutorDto;
import br.com.stefanini.developerup.model.Autor;

public class AutorParser {
	public static AutorParser get() {
		return new AutorParser();
	}

	public AutorDto dto(Autor entidade) {
		AutorDto dto = new AutorDto();

		dto.setNome(entidade.getNome());
		dto.setISNI(entidade.getISNI());
		dto.setEmail(entidade.getEmail());
		dto.setDataNascimento(entidade.getDataNascimento());
		dto.setBiografia(entidade.getBiografia());

		return dto;
	}
	
	public Autor parserAutor(AutorDto entidade) {
		Autor dto = new Autor();

		dto.setNome(entidade.getNome());
		dto.setISNI(entidade.getISNI());
		dto.setEmail(entidade.getEmail());
		dto.setDataNascimento(entidade.getDataNascimento());
		dto.setBiografia(entidade.getBiografia());

		return dto;
	}
}
