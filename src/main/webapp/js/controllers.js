myApp.controller('managersCntrl', ['$scope', 'Manager', function($scope, Manager) {
	$scope.test = 'lala';
	/*
	$scope.myData = [{manager:'PIMCO', groupRXM:'GC42153', dailyIRS : '75.0%', aggIRS : '89.0%', dailyCDS : '66.0%', aggCDS : '101.0%', comment : 'Amber on IRS, Breach on Agg CDS'},
	                 {manager:'Frank Russel Trust Company', groupRXM:'GC425421', dailyIRS : '6.0%', aggIRS : '16.5%', dailyCDS : '2.3%', aggCDS : '19.5%', comment : ''},
	                 {manager:'Toronto Dominion Bank Org', groupRXM:'B14256', dailyIRS : '4.0%', aggIRS : '11.0%', dailyCDS : '1.5%', aggCDS : '13.0%', comment : ''},
	                 {manager:'John Hancock', groupRXM:'GCA0021', dailyIRS : '6.0%', aggIRS : '16.5%', dailyCDS : '2.3%', aggCDS : '19.5%', comment : 'Amber on EUR CCY'}];
	 */	   
	
	$scope.myData = Manager.all();
	$scope.gridOptions = {
			data : 'myData',
			columnDefs : [{field : 'name', displayName : 'Manager', width : 200}, 
			              {field : 'groupRXM', displayName : 'Group RXM', width : 100},
			              {field : 'dailyIRS', displayName : 'Daily IRS', enableCellEdit: true, cellTemplate : 'templates/utilization_cell.html'},
			              {field : 'aggIRS', displayName : 'Agg IRS', cellTemplate : 'templates/utilization_cell.html'},
			              {field : 'dailyCDS', displayName : 'Daily CDS', cellTemplate : 'templates/utilization_cell.html'},
			              {field : 'aggCDS', displayName : 'Agg CDS', cellTemplate : 'templates/utilization_cell.html'},
			              {field : 'comment', displayName : 'Comment', width : 300}],
			
			multiSelect : false,
			rowTemplate:'templates/managers_row.html'
	};
	
	$scope.rowDetails = function(row) {
		return '#funds/' + escape(row.getProperty('name')); 
	};
	
}]);

myApp.controller('fundsCntrl', ['$scope', 'Manager', '$routeParams', function($scope, Manager, $routeParams) {
	$scope.manager = Manager.get({id:$routeParams.managerName});
	
	$scope.managerName = $routeParams.managerName;
}]);
