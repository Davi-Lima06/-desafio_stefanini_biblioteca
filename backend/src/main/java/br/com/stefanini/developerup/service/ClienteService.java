package br.com.stefanini.developerup.service;



import java.util.List;
import java.util.stream.Collectors;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.NotFoundException;

import br.com.stefanini.developerup.dao.ClienteDao;
import br.com.stefanini.developerup.dto.ClienteDto;
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
 
    public void inserir(ClienteDto cliente) throws Exception {
    	this.validar(cliente);
    	dao.inserir(ClienteParser.get().parseCliente(cliente));
    }
    
    public void deletar(String parametro) {   
    	dao.deletar(parametro);
    }
    
    public void atualizar(ClienteDto cliente,String parametro) {
    	dao.atualizar(ClienteParser.get().parseCliente(cliente), parametro);
    }
    
    public void emprestarLivro( String parametro) throws Exception {
    	dao.emprestarLivro( parametro);
    }
    
    public void devolverLivro(String parametro) {
    	dao.devolverLivro( parametro);
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
