package br.com.stefanini.developerup.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;

import br.com.stefanini.developerup.dao.LivroDao;
import br.com.stefanini.developerup.dto.LivroDto;
import br.com.stefanini.developerup.model.Livro;
import br.com.stefanini.developerup.parser.LivroParser;

@RequestScoped
public class LivroService {
	@Inject
    LivroDao dao;

    public List<LivroDto> listar(){
    	return dao.list().stream().map(LivroParser.get()::dto).collect(Collectors.toList());
    }
    public List<LivroDto> listar(int pageIndex, int pageSize){
    	return dao.list(pageIndex, pageSize).stream().map(LivroParser.get()::dto).collect(Collectors.toList());
    }
    
    public LivroDto listarUmLivro(Long id) {
    	return  dao.list().stream().map(LivroParser.get()::dto).filter(livro -> {
			return livro.getISBN().equals(id);
		}).findFirst().get();
    }
    
    @Transactional
    public void inserir(LivroDto livro) {
    	this.validar(livro);
    	dao.inserir(LivroParser.get().parseLivro(livro));
    }
    
    @Transactional
    public void deletar(Long parametro) {   
    	dao.deletar(parametro);
    }
    
    @Transactional
    public void atualizar(LivroDto livro,Long parametro) {
    	dao.atualizar(LivroParser.get().parseLivro(livro), parametro);
    }
    
    @Transactional
    public void emprestarLivro(Long parametro) throws Exception {
    	Livro livro = dao.listaUmLivro(parametro);
		Long qtLivros = 0L; 
		if(livro.getQuantidade().equals(qtLivros)) {
			throw new Exception("esse livro não está disponível no momento");
		}else {
    	dao.emprestarLivro( parametro, livro);
		}
    }
    
    @Transactional
    public void devolverLivro(Long parametro) {
    	dao.devolverLivro( parametro); 
    }
    
    private void validar(LivroDto dto) throws NotFoundException{
        if(dto == null){
            throw new NotFoundException();
        }
        if(dto.getAutor() == null ){
            throw new NotFoundException();
        }
        if(dto.getQuantidade() == null ){
            throw new NotFoundException();
        }
        if(dto.getAnoPublicacao() == null ){
        	throw new NotFoundException();
        }
        if(dto.getISBN() == null ){
        	throw new NotFoundException();
        }
        if(dto.getNomeLivro() == null ){
        	throw new NotFoundException();
        }
        if(dto.getNomeEditora() == null ){
        	throw new NotFoundException();
        }
        

    }
}
