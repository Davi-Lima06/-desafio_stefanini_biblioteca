package br.com.stefanini.developerup.rest;

import java.util.NoSuchElementException;

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

import br.com.stefanini.developerup.dto.ClienteDto;
import br.com.stefanini.developerup.service.ClienteService;

/**
 * @author Danilo Dorgam email danilodorgam@gmail.com created 30/03/2022
 * @version 0.1.0
 */
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Path("/cliente")
@RequestScoped
public class ClienteRest {
	@Inject
	ClienteService service;

	@GET
	@Operation(summary = "Listar", description = "Retorna uma lista de Clientes")
	@APIResponse(responseCode = "200", description = "ClienteDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
	public Response listar() {
		return Response.status(Response.Status.OK).entity(service.listar()).build();
	}
	
	@GET
	@Path("/{index}/{page}")
	@Operation(summary = "Listar", description = "Retorna uma lista de Clientes")
	@APIResponse(responseCode = "200", description = "ClienteDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
	public Response listar(@PathParam("index") int pageIndex,@PathParam("page") int pageSize) {
		return Response.status(Response.Status.OK).entity(service.listar(pageIndex,pageSize)).build();
	}
	
	@GET
	@Path("/{id}")
	@Operation(summary = "Listar", description = "Retorna um cliente pelo id")
	@APIResponse(responseCode = "200", description = "ClienteDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
	public Response listarUmCliente(@PathParam("id") String parametro) {
		try {
			return Response.status(Response.Status.OK).entity(service.listarCliente(parametro)).build();
		} catch (NoSuchElementException e) {
			return Response.status(Response.Status.OK).entity("cliente não encontrado").build();
		}
	}

	@POST
	@Operation(summary = "Insere um cliente", description = "insere um cliente")
	@APIResponse(responseCode = "201", description = "ClienteDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
	public Response create(ClienteDto pessoa) throws Exception {
		service.inserir(pessoa);
		return Response.status(Response.Status.CREATED).build();

	}

	@DELETE
	@Path("/{id}")
	@Operation(summary = "Deletar clientes", description = "Deleta um cliente pelo id")
	@APIResponse(responseCode = "201", description = "ClienteDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
	public Response delete(@PathParam("id") String parametro) {
		service.deletar(parametro);

		return Response.status(Response.Status.OK).build();
	}

	@PUT
	@Path("/{parametro}")
	@Operation(summary = "Atualizar Cliente", description = "Atualiza um cliente pelo id")
	@APIResponse(responseCode = "204", description = "ClienteDto", content = {
			@Content(mediaType = "application/json", schema = @Schema(implementation = ClienteDto.class)) })
	public Response update(@PathParam("parametro") String parametro, ClienteDto cliente) {
		service.atualizar(cliente, parametro);

		return Response.status(Response.Status.OK).build();
	}
	

}
