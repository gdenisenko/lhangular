package newproject.testproject;

public class ServiceProvider {
	private static ManagerService managerService;
	static {
		managerService = new ManagerService();
	}
	
	public static ManagerService getManagerService() {
		return managerService;
	}
	
}
