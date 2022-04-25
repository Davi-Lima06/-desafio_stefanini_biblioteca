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

import br.com.stefanini.developerup.dto.AutorDto;
import br.com.stefanini.developerup.service.AutorService;

@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/autor")
@RequestScoped
public class AutorRest {

	@Inject
	AutorService service;

	@GET
	@Operation(summary = "Listar", description = "Retorna uma lista de Autores")
	@APIResponse(responseCode = "200", description = "AutorDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = AutorDto.class)) })
	public Response listar() {
		return Response.status(Response.Status.OK).entity(service.listAll()).build();
	}
	
	@GET
	@Path("/{index}/{page}")
	@Operation(summary = "Listar", description = "Retorna uma lista de Autores por pageindex e pagesize")
	@APIResponse(responseCode = "200", description = "AutorDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = AutorDto.class)) })
	public Response listar(@PathParam("index") int id,@PathParam("page") int pageSize) {
		return Response.status(Response.Status.OK).entity(service.listAll(id,pageSize)).build();
	}
	
	@GET
	@Path("/{id}")
	@Operation(summary = "Listar um autor", description = "Retorna um autor pelo id")
	@APIResponse(responseCode = "200", description = "AutorDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = AutorDto.class)) })
	public Response listarUmAutor(@PathParam("id") Long id) {
		return Response.status(Response.Status.OK).entity(service.listarPorId(id)).build();
	}

	@POST
	@Operation(summary = "Inserir um Autor", description = "insere um autor")
	@APIResponse(responseCode = "201", description = "AutorDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = AutorDto.class)) })
	public Response create(AutorDto autor) throws Exception {
		try {
			service.inserir(autor);
			return Response.status(Response.Status.CREATED).build();					
		} catch (RuntimeException error) {
			error.printStackTrace();
			return Response.status(Response.Status.BAD_REQUEST).entity("Erro ao inserir!! campo email ou ISNB já existente").build();
		}catch (Exception error) {
            error.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("ERROR ao inserir! Problema no servidor!").build();
        }
	}

	@DELETE
	@Path("/{id}")
	@Operation(summary = "Deletar autores", description = "Deleta um autor pelo id")
	@APIResponse(responseCode = "201", description = "AutorDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = AutorDto.class)) })
	public Response delete(@PathParam("id") Long id) {
		service.deletar(id);

		return Response.status(Response.Status.OK).build();
	}

	@PUT
	@Path("/{id}")
	@Operation(summary = "Atualizar Autor", description = "Atualiza um Autor pelo id")
	@APIResponse(responseCode = "204", description = "AutorDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = AutorDto.class)) })
	public Response update(@PathParam("id") Long id, AutorDto autor) {

		service.atualizar(autor, id);

		return Response.status(Response.Status.OK).build();
	}
}
