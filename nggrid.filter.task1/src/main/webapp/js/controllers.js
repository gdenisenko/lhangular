myApp.controller('rxmsCntrl', ['$scope', '$location', function($scope, $location) {
	$scope.myData = [{id : 1, rxmGroup:'SGC30031', rxmNumber:'C0123450', dailyNetDV01 : '12000', dailyCrossDV01 : '25', aggNetDV01 : '$400,000.0'},
	                 {id : 2, rxmGroup:'SGC30032', rxmNumber:'C0123459', dailyNetDV01 : '7000', dailyCrossDV01 : '100', aggNetDV01 : '$600,000.0'},
	                 {id : 3, rxmGroup:'SGC30033', rxmNumber:'C0123451', dailyNetDV01 : '20000', dailyCrossDV01 : '500', aggNetDV01 : '$100,000.0'},
	                 {id : 4, rxmGroup:'SGC30034', rxmNumber:'C0123458', dailyNetDV01 : '3000', dailyCrossDV01 : '1200', aggNetDV01 : '$400,000.0'},
	                 {id : 5, rxmGroup:'SGC30035', rxmNumber:'C0123452', dailyNetDV01 : '5000', dailyCrossDV01 : '3300', aggNetDV01 : '$400,000.0'},
	                 {id : 6, rxmGroup:'SGC30039', rxmNumber:'C0123457', dailyNetDV01 : '12056', dailyCrossDV01 : '70', aggNetDV01 : '$500,000.0'}];
	
	
	$scope.gridOptions = {
			data : 'myData',
			columnDefs : [{field : 'rxmGroup', displayName : 'RXM Group'}, 
			              {field : 'rxmNumber', displayName : 'RXM Number'},
			              {field : 'dailyNetDV01', displayName : 'Daily Net DV01', cellTemplate : 'templates/linked_edit_cell.html'},
			              {field : 'dailyCrossDV01', displayName : 'Daily Cross DV01', cellTemplate : 'templates/linked_edit_cell.html'},
			              {field : 'aggNetDV01', displayName : 'Agg Net DV01', cellTemplate : 'templates/linked_edit_cell.html'},
			              {displayName : 'Options', width: 180, cellTemplate : 'templates/buttons_cell.html'}],
			
			multiSelect : false,
			filterOptions :  {filterText: '', useExternalFilter: false }
	};
	
	////////////////////////////////
	$scope.rxmDetails = function(row) {
		$location.path('rxm/' + escape(row.getProperty('rxmNumber')));
	};
	
	///////////////////////////////
	$scope.edit = new Array($scope.gridOptions.data.length);
	$scope.editSave = function (row) {
		$scope.edit[row.getProperty('id')] = !$scope.edit[row.getProperty('id')];
	};
	
	$scope.isEdit = function(row) {
		return !!$scope.edit[row.getProperty('id')];
	};
	
	$scope.test = function (row) {
		alert(row);
	};
	///////////////////////////////
	
	$scope.applyFilter = function() {
		$scope.gridOptions.filterOptions.filterText = 'Daily Net DV01:' + $scope.dvfilter;
	}
}]);

myApp.controller('rxmDetailsCntrl', ['$scope', '$routeParams', function($scope, $routeParams) {	
	$scope.rxmNumber = $routeParams.rxmNumber;
}]);
