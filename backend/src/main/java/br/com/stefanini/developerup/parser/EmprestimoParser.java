package br.com.stefanini.developerup.parser;

import br.com.stefanini.developerup.dto.EmprestimoDto;
import br.com.stefanini.developerup.dto.ModeloEmprestimoDto;
import br.com.stefanini.developerup.model.Emprestimo;

public class EmprestimoParser {	
	public static EmprestimoParser get() {
		return new EmprestimoParser();
	}

	public EmprestimoDto dto(Emprestimo entidade) {
		EmprestimoDto dto = new EmprestimoDto();
		dto.setId(entidade.getId());
		dto.setCliente(entidade.getCliente());
		dto.setLivro(entidade.getLivro());
		dto.setDataInicio(entidade.getDataInicio());

		return dto;
	}
	
	public Emprestimo parserEmprestimo(EmprestimoDto entidade) {
		Emprestimo dto = new Emprestimo();
		dto.setId(entidade.getId());
		dto.setCliente(entidade.getCliente());
		dto.setLivro(entidade.getLivro());
		dto.setDataInicio(entidade.getDataInicio());

		return dto;
	}

	public ModeloEmprestimoDto parseModelo(Emprestimo entidade){
		ModeloEmprestimoDto dto = new ModeloEmprestimoDto();
		dto.setCliente(entidade.getCliente().getNome());
		dto.setLivro(entidade.getLivro().getNomeLivro());
		dto.setId(entidade.getId());
		dto.setDataInicio(entidade.getDataInicio());

		return dto;
	}
}
