package br.com.stefanini.developerup.dao;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.transaction.Transactional;

import br.com.stefanini.developerup.model.Autor;
import io.quarkus.hibernate.orm.panache.PanacheQuery;

@RequestScoped
public class AutorDao {

	public List<Autor> list() { // lista todos os autores
		return Autor.listAll();
	}
	
	public List<Autor> list(int pageIndex, int pageSize) { // lista todos os autores
		PanacheQuery<Autor> autor = Autor.findAll();
		
		return autor.page(pageIndex, pageSize).list();
	}

	public Autor listaUmAutor(Long id) { // lista um autor por id
		return Autor.findById(id);
	}

	@Transactional
	public void inserir(Autor autor) { // insere um novo autor
		autor.persist();
	}

	@Transactional
	public Boolean deletar(Long id) { // deleta um autor

		return Autor.deleteById(id);

	}

	@Transactional
	public void atualizar(Autor autor, Long id) { // atualiza um autor
		Autor.update("nome = ?1, email = ?2 , dataNascimento = ?3, biografia = ?4 where ISNI = ?5", autor.getNome(),
				autor.getEmail(), autor.getDataNascimento(), autor.getBiografia(), id);
	}
}
