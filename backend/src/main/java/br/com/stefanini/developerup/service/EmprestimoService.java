package br.com.stefanini.developerup.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.NotFoundException;

import br.com.stefanini.developerup.dao.EmprestimoDao;
import br.com.stefanini.developerup.dto.EmprestimoDto;
import br.com.stefanini.developerup.model.Cliente;
import br.com.stefanini.developerup.model.Emprestimo;
import br.com.stefanini.developerup.model.Livro;
import br.com.stefanini.developerup.parser.EmprestimoParser;

@RequestScoped
public class EmprestimoService {

	@Inject
    EmprestimoDao dao;

	@Inject
	ClienteService cliDao;
	
	@Inject
	LivroService livDao;
	
    public List<EmprestimoDto> listar(){
    	return dao.list().stream().map(EmprestimoParser.get()::dto).collect(Collectors.toList());
    }
    
    public EmprestimoDto listarUmEmprestimo(Long parametro) {
    	return  dao.list().stream().map(EmprestimoParser.get()::dto).filter(emprestimo -> {
			return emprestimo.getId().equals(parametro);
		}).findFirst().get();
    }
    
    public void inserir(EmprestimoDto emprestimo) throws Exception {
    	this.validar(emprestimo);
    	Cliente cliente = emprestimo.getCliente();
    	
    	Livro livro = emprestimo.getLivro();
    	    	
    	List<EmprestimoDto> list = listar();
    	
    	for(int i= 0;i < list.size();i++) {
    		if(list.get(i).getLivro().getISBN().equals(livro.getISBN()) && list.get(i).getCliente().getEmail().equals(cliente.getEmail())) {
    			throw new Exception("já existe cadastro com essa configuração");
        	}
    	}
    	
    	
    	if(cliente.equals(emprestimo.getCliente())) {
    		cliDao.emprestarLivro(cliente.getEmail());
    	}
    	
    	if(livro.equals(emprestimo.getLivro())) {
    		livDao.emprestarLivro(livro.getISBN());
    	}  
    	
    	dao.inserir(EmprestimoParser.get().parserEmprestimo(emprestimo));
    }
    
    public void deletar(Long parametro) {   
    	Emprestimo emp = dao.listarUmEmprestimo(parametro);
    	Livro livro = emp.getLivro();
    	Cliente cliente = emp.getCliente();
    	
    	cliDao.devolverLivro(cliente.getEmail());
    	livDao.devolverLivro(livro.getISBN());
    	
      	dao.deletar(parametro);
    }
    
    private void validar(EmprestimoDto dto) throws NotFoundException{
        if(dto == null){
            throw new NotFoundException();
        }
        if(dto.getCliente() == null ){
            throw new NotFoundException();
        }
        if(dto.getLivro() == null ){
            throw new NotFoundException();
        }
       
    }
  
    
}
