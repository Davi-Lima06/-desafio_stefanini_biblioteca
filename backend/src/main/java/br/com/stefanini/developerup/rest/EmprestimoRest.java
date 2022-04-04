package br.com.stefanini.developerup.rest;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.developerup.dto.EmprestimoDto;
import br.com.stefanini.developerup.service.EmprestimoService;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/emprestimos")
@RequestScoped
public class EmprestimoRest {
	@Inject
	EmprestimoService service;
	
	@GET
	@Operation(summary = "Listar", description = "Retorna uma lista de Livros")
	@APIResponse(responseCode = "200", description = "EmprestimoDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = EmprestimoDto.class)) })
	public Response listar() {
		return Response.status(Response.Status.OK).entity(service.listar()).build();
	}
	
	@GET
	@Path("/{id}")
	@Operation(summary = "Listar", description = "Retorna um  Livro pelo id")
	@APIResponse(responseCode = "200", description = "EmprestimoDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = EmprestimoDto.class)) })
	public Response listarUmEmprestimo(@PathParam("id") Long parametro) {
		return Response.status(Response.Status.OK).entity(service.listarUmEmprestimo(parametro)).build();
	}

	@POST
	@Operation(summary = "cadastra um emprestimo", description = "cria um novo emprestimo")
	@APIResponse(responseCode = "201", description = "EmprestimoDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = EmprestimoDto.class)) })
	public Response create(EmprestimoDto livro) throws Exception {
		service.inserir(livro);
		return Response.status(Response.Status.CREATED).build();

	}

	@DELETE
	@Path("/{id}")
	@Operation(summary = "Deletar emprestimos", description = "Deleta um Emprestimo pelo id")
	@APIResponse(responseCode = "201", description = "EmprestimoDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = EmprestimoDto.class)) })
	public Response delete(@PathParam("id") Long id) {
		service.deletar(id);

		return Response.status(Response.Status.OK).build(); 
	}

}
