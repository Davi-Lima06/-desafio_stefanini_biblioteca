package br.com.stefanini.developerup.service;


import org.junit.jupiter.api.Test;
import org.wildfly.common.Assert;

import br.com.stefanini.developerup.dto.AutorDto;

class AutorServiceTest {

	@Test
	void test() throws Exception{
		AutorService service = new AutorService();
		AutorDto dto = new AutorDto();
		dto.setBiografia("biografia");
		dto.setDataNascimento("03/04/1999");
		dto.setEmail("email#email");
		dto.setISNI(158478158L);
		dto.setNome("Davi");
		
		service.inserir(dto);
		
		Assert.assertTrue(dto.getBiografia().equals("biografia"));
	}

}
