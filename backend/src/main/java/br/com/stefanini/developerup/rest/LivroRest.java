package br.com.stefanini.developerup.rest;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.eclipse.microprofile.openapi.annotations.Operation;
import org.eclipse.microprofile.openapi.annotations.media.Content;
import org.eclipse.microprofile.openapi.annotations.media.Schema;
import org.eclipse.microprofile.openapi.annotations.responses.APIResponse;

import br.com.stefanini.developerup.dto.LivroDto;
import br.com.stefanini.developerup.service.ClienteService;
import br.com.stefanini.developerup.service.LivroService;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/livro")
@RequestScoped
public class LivroRest {
	@Inject
	LivroService service;
	
	@Inject
	ClienteService cliente;

	@GET
	@Operation(summary = "Listar", description = "Retorna uma lista de livros")
	@APIResponse(responseCode = "200", description = "LivroDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivroDto.class)) })
	public Response listar() throws Exception {
		return Response.status(Response.Status.OK).entity(service.listar()).build();
	}
	
	@GET
	@Path("/{index}/{size}")
	@Operation(summary = "Listar", description = "Retorna uma lista de livros")
	@APIResponse(responseCode = "200", description = "LivroDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivroDto.class)) })
	public Response listar(@PathParam("index") int pageIndex,@PathParam("size") int pageSize) throws Exception {
		return Response.status(Response.Status.OK).entity(service.listar(pageIndex,pageSize)).build();
	}
	
	@GET
	@Path("/{id}")
	@Operation(summary = "Listar", description = "Retorna um livro pelo id")
	@APIResponse(responseCode = "200", description = "LivroDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivroDto.class)) })
	public Response listarUmCliente(@PathParam("id") Long parametro) throws Exception {
		return Response.status(Response.Status.OK).entity(service.listarUmLivro(parametro)).build();
	}

	@POST
	@Operation(summary = "Insere um livro", description = "insere um livro")
	@APIResponse(responseCode = "201", description = "LivroDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivroDto.class)) })
	public Response create(LivroDto livro) throws Exception {
		service.inserir(livro);
		return Response.status(Response.Status.CREATED).build();

	}

	@DELETE
	@Path("/{id}")
	@Operation(summary = "Deletar livros", description = "Deleta um livro pelo id")
	@APIResponse(responseCode = "201", description = "LivroDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivroDto.class)) })
	public Response delete(@PathParam("id") Long id) {
		service.deletar(id);

		return Response.status(Response.Status.OK).build();
	}

	@PUT
	@Path("/{parametro}")
	@Operation(summary = "Atualizar livro", description = "Atualiza um livro")
	@APIResponse(responseCode = "204", description = "LivroDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = LivroDto.class)) })
	public Response update(@PathParam("parametro") Long parametro, LivroDto livro) {
		service.atualizar(livro, parametro);

		return Response.status(Response.Status.OK).build();
	}

}
