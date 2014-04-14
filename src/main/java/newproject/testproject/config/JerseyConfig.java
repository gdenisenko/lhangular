package newproject.testproject.config;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class JerseyConfig extends ResourceConfig {
	public JerseyConfig() {
		packages("newproject.testproject.resource");
	}
}
