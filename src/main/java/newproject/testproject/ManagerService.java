package newproject.testproject;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import newproject.testproject.entity.Manager;

public class ManagerService {
	Map<String, Manager> managers = new HashMap<String, Manager>();
	
	public ManagerService() {
		managers.put("PIMCO", new Manager("PIMCO", "GC42153", 75.0, 89.0, 66.0, 101.0, "Amber on IRS, Breach on Agg CDS"));
		managers.put("Frank Russel Trust Company", new Manager("Frank Russel Trust Company", "GC425421", 6.0, 16.5, 2.3, 19.5, ""));
		managers.put("Toronto Dominion Bank Org", new Manager("Toronto Dominion Bank Org", "B14256", 4.0, 11.0, 1.5, 13.0, ""));
		managers.put("John Hancock", new Manager("John Hancock", "GCA0021", 25.0, 79.5, 2.3, 19.5, "Amber on EUR CCY"));
	}
	
	public Collection<Manager> getManagers() {
		return managers.values();
	}
	
	public Manager getManager(String name) {
		return managers.get(name);
	}
}
