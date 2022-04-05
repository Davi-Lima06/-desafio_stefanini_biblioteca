package br.com.stefanini.developerup.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;

import br.com.stefanini.developerup.dao.AutorDao;
import br.com.stefanini.developerup.dto.AutorDto;
import br.com.stefanini.developerup.parser.AutorParser;

@RequestScoped
public class AutorService {

	@Inject
	AutorDao dao;
	
	public List<AutorDto> listAll(){ // lista todos os autores
		return dao.list().stream().map(AutorParser.get()::dto).collect(Collectors.toList());
	}
	
	public List<AutorDto> listAll(int pageIndex,int pageSize){ // lista todos os autores
		return dao.list(pageIndex, pageSize).stream().map(AutorParser.get()::dto).collect(Collectors.toList());
	}
	
	public AutorDto listarPorId(Long id){// lista um autor por id
		return  dao.list().stream().map(AutorParser.get()::dto).filter(autor -> {
			return autor.getISNI().equals(id);
		}).findFirst().get();
	}
	
	@Transactional
	public void inserir(AutorDto autor) {// insere um novo autor
		this.validar(autor);
		dao.inserir(AutorParser.get().parserAutor(autor));
	}
	
	@Transactional
	public void deletar(Long id) {// deleta um autor
		dao.deletar(id);
	}
	
	@Transactional
	public void atualizar(AutorDto autor, Long id) {// atualiza um autor
		dao.atualizar(AutorParser.get().parserAutor(autor), id);
	}
	
	private void validar(AutorDto dto) throws NotFoundException{
        if(dto == null){
            throw new NotFoundException();
        }
        if(dto.getEmail() == null ){
            throw new NotFoundException();
        }
        if(dto.getBiografia() == null ){
            throw new NotFoundException();
        }
        if(dto.getDataNascimento() == null ){
        	throw new NotFoundException();
        }
        if(dto.getISNI() == null ){
        	throw new NotFoundException();
        }
        if(dto.getNome() == null ){
        	throw new NotFoundException();
        }
        

    }
}
