package newproject.testproject.entity;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Manager {
	private String name;
	private String groupRXM;
	private Double dailyIRS;
	private Double aggIRS;
	private Double dailyCDS;
	private Double aggCDS;
	private String comment;
	
	public Manager(){};
	
	public Manager(String name, String groupRXM, Double dailyIRS,
			Double aggIRS, Double dailyCDS, Double aggCDS, String comment) {
		super();
		this.name = name;
		this.groupRXM = groupRXM;
		this.dailyIRS = dailyIRS;
		this.aggIRS = aggIRS;
		this.dailyCDS = dailyCDS;
		this.aggCDS = aggCDS;
		this.comment = comment;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGroupRXM() {
		return groupRXM;
	}
	public void setGroupRXM(String groupRXM) {
		this.groupRXM = groupRXM;
	}
	public Double getDailyIRS() {
		return dailyIRS;
	}
	public void setDailyIRS(Double dailyIRS) {
		this.dailyIRS = dailyIRS;
	}
	public Double getAggIRS() {
		return aggIRS;
	}
	public void setAggIRS(Double aggIRS) {
		this.aggIRS = aggIRS;
	}
	public Double getDailyCDS() {
		return dailyCDS;
	}
	public void setDailyCDS(Double dailyCDS) {
		this.dailyCDS = dailyCDS;
	}
	public Double getAggCDS() {
		return aggCDS;
	}
	public void setAggCDS(Double aggCDS) {
		this.aggCDS = aggCDS;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
}
