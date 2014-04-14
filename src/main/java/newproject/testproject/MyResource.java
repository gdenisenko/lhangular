package newproject.testproject;

import java.util.Date;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import newproject.testproject.entity.TestBean;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("test")
public class MyResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public TestBean getIt() {
    	TestBean bean = new TestBean();
    	bean.setName("Test Name");
    	bean.setDate(new Date());
    	return bean;
    }
}
