package newproject.testproject.resource;

import java.util.Collection;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;

import newproject.testproject.ServiceProvider;
import newproject.testproject.entity.Manager;

@Path("manager")
public class ManagerResource {
	@GET @Path("all")
	@Produces(MediaType.APPLICATION_JSON)
	public Collection<Manager> getAll() {
		return ServiceProvider.getManagerService().getManagers();
	}
	
	@GET @Path("{managerName}")
	@Produces(MediaType.APPLICATION_JSON)
	public Manager getManager(@PathParam("managerName") String name) {
		Manager m =  ServiceProvider.getManagerService().getManager(name);
		if (m == null) {
			throw new WebApplicationException(404);
		}
		
		return m;
	}
}

