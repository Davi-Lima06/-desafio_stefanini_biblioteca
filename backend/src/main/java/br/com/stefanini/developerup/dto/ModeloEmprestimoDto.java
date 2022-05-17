package br.com.stefanini.developerup.dto;

public class ModeloEmprestimoDto {
    private Long id;
	

	private String cliente;
	
	private String livro;
	
	
	private String dataInicio;


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }


    public String getCliente() {
        return cliente;
    }


    public void setCliente(String cliente) {
        this.cliente = cliente;
    }


    public String getLivro() {
        return livro;
    }


    public void setLivro(String livro) {
        this.livro = livro;
    }


    public String getDataInicio() {
        return dataInicio;
    }


    public void setDataInicio(String dataInicio) {
        this.dataInicio = dataInicio;
    }

    
}
