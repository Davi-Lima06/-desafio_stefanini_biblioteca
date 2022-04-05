package br.com.stefanini.developerup.service;



import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.NotFoundException;

import br.com.stefanini.developerup.dao.ClienteDao;
import br.com.stefanini.developerup.dto.ClienteDto;
import br.com.stefanini.developerup.model.Cliente;
import br.com.stefanini.developerup.parser.ClienteParser;

/**
 * @author Danilo Dorgam
 * email danilodorgam@gmail.com
 * created 30/03/2022
 * @version 0.1.0
 */
@RequestScoped
public class ClienteService {
    @Inject
    ClienteDao dao;

    public List<ClienteDto> listar(){
        return dao.listar().stream().map(ClienteParser.get()::dto).collect(Collectors.toList());
    }
    
    public List<ClienteDto> listar(int pageIndex, int pageSize){
    	return dao.listar(pageIndex, pageSize).stream().map(ClienteParser.get()::dto).collect(Collectors.toList());
    }
    
    public ClienteDto listarCliente(String id){
    	return  dao.listar().stream().map(ClienteParser.get()::dto).filter(cliente -> {
			return cliente.getEmail().equals(id);
		}).findFirst().get();
    }
    
    @Transactional
    public void inserir(ClienteDto cliente) throws Exception {
    	this.validar(cliente);
    	Cliente cli = dao.listarUmCliente(cliente.getEmail());
		if(dao.listar().contains(cli)) {
			throw new Exception("já existe um cliente com esse email");
		}else {
			cliente.setLivrosEmprestados(0);
			dao.inserir(ClienteParser.get().parseCliente(cliente));
		}
    }
    
    @Transactional
    public void deletar(String parametro) {   
    	dao.deletar(parametro);
    }
    
    @Transactional
    public void atualizar(ClienteDto cliente,String parametro) {
    	dao.atualizar(ClienteParser.get().parseCliente(cliente), parametro);
    }
    
    @Transactional
    public void emprestarLivro( String parametro) throws Exception {
    	Cliente cliente = dao.listarUmCliente(parametro);
		Integer valorMaximo = 3;
		if(cliente.getLivrosEmprestados().equals(valorMaximo)) { 
			throw new Exception("o cliente atingiu o número máximo de livros emprestados");
		}else {			
    	dao.emprestarLivro( parametro, cliente);
		}
    }
    
    @Transactional
    public void devolverLivro(String parametro) {
    	Cliente cliente = dao.listarUmCliente(parametro);
    	dao.devolverLivro( parametro, cliente);
    }
    
    
    
    
    private void validar(ClienteDto dto) throws NotFoundException{
        if(dto == null){
            throw new NotFoundException();
        }
        if(dto.getEmail() == null ){
            throw new NotFoundException();
        }
        if(dto.getContato() == null ){
            throw new NotFoundException();
        }
        

    }
}
