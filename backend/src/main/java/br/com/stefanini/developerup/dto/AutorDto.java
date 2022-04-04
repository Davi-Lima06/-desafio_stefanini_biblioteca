package br.com.stefanini.developerup.dto;

public class AutorDto {


	private String nome;

	private Long ISNI;
	
	private String email;
	
	private String dataNascimento;
	
	private String biografia;


	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Long getISNI() {
		return ISNI;
	}

	public void setISNI(Long iSNI) {
		ISNI = iSNI;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(String dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getBiografia() {
		return biografia;
	}

	public void setBiografia(String biografia) {
		this.biografia = biografia;
	}

}
