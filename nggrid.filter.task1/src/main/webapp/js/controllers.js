myApp.controller('rxmsCntrl', ['$scope', '$location', function($scope, $location) {
	$scope.myData = [{id : 1, rxmGroupName : 'A', rxmGroup:'SGC30031', rxmName : 'E', rxmNumber:'C0123450', dailyNetDV01 : '12000', dailyCrossDV01 : '25', aggNetDV01 : '$400,000.0'},
	                 {id : 2, rxmGroupName : 'B', rxmGroup:'SGC30032', rxmName : 'F', rxmNumber:'C0123459', dailyNetDV01 : '7000', dailyCrossDV01 : '100', aggNetDV01 : '$600,000.0'},
	                 {id : 3, rxmGroupName : 'C', rxmGroup:'SGC30023', rxmName : 'G', rxmNumber:'C0123451', dailyNetDV01 : '20000', dailyCrossDV01 : '500', aggNetDV01 : '$100,000.0'},
	                 {id : 4, rxmGroupName : 'D', rxmGroup:'SGC30034', rxmName : 'F', rxmNumber:'C0123448', dailyNetDV01 : '3000', dailyCrossDV01 : '1200', aggNetDV01 : '$400,000.0'},
	                 {id : 5, rxmGroupName : 'A', rxmGroup:'SGC30025', rxmName : 'G', rxmNumber:'C0123442', dailyNetDV01 : '5000', dailyCrossDV01 : '3300', aggNetDV01 : '$400,000.0'},
	                 {id : 6, rxmGroupName : 'A', rxmGroup:'SGC30039', rxmName : 'G', rxmNumber:'C0123457', dailyNetDV01 : '12056', dailyCrossDV01 : '70', aggNetDV01 : '$500,000.0'}];
	
	
	$scope.gridOptions = {
			data : 'myData',
			columnDefs : [{field : 'rxmGroupName', displayName : 'RXM Group Name', width : 145},
			              {field : 'rxmGroup', displayName : 'RXM Group Number', width : 155},
			              {field : 'rxmName', displayName : 'RXM Name'},
			              {field : 'rxmNumber', displayName : 'RXM Number'},
			              {field : 'dailyNetDV01', displayName : 'Daily Net DV01', cellTemplate : 'templates/linked_edit_cell.html'},
			              {field : 'dailyCrossDV01', displayName : 'Daily Cross DV01', cellTemplate : 'templates/linked_edit_cell.html'},
			              {field : 'aggNetDV01', displayName : 'Agg Net DV01', cellTemplate : 'templates/linked_edit_cell.html'},
			              {displayName : 'Options', width: 170, cellTemplate : 'templates/buttons_cell.html'}],
			
			multiSelect : false,
			filterOptions :  {filterText: '', useExternalFilter: false }
	};
	
	////////////////////////////////
	$scope.rxmDetails = function(row, editable) {
		mode = editable ? '/edit' : '';
		
		$location.path('rxm/' + escape(row.getProperty('rxmNumber')) + mode);
	};
	
	///////////////////////////////
	$scope.edit = new Array($scope.gridOptions.data.length);
	$scope.editSave = function (row) {
		$scope.edit[row.getProperty('id')] = !$scope.edit[row.getProperty('id')];
	};
	
	$scope.isEdit = function(row) {
		return !!$scope.edit[row.getProperty('id')];
	};
	
	///////////////////////////////
	
	$scope.applyFilter = function() {
		$scope.gridOptions.filterOptions.filterText = 'RXM Group Name:' + getStringValue($scope.rxmGroupNameFilter)  
													+ ';RXM Group Number:' + getStringValue($scope.rxmGroupNumberFilter)
													+ ';RXM Name:' + getStringValue($scope.rxmNameFilter)
													+ ';RXM Number:' + getStringValue($scope.rxmNumberFilter);
	};
}]);

myApp.controller('rxmDetailsCntrl', ['$scope', '$routeParams', function($scope, $routeParams) {	
	$scope.rxmNumber = $routeParams.rxmNumber;
	isEdit = $routeParams.mode == 'edit';
	
	$scope.myData = rxmDetailsData;
	
	$scope.gridOptions = {
			data : 'myData', 
			showGroupPanel: true, 
			keepLastSelected:true,
			showFilter: true,
			multiSelect: false,
			showColumnMenu:true,
			filterOptions: {filterText:'', useExternalFilter: false}, 
			columnDefs: [      
		                    { width : 170, cellTemplate: '<input type="button" value="Restrict">&nbsp;<input type="button" value="Edit">&nbsp;<input type="button" value="Kill">'},
		                    { field: "A_CCY", displayName:'Currency',width: 75},
		 					{ field: "A_DAILY_DELTA_NET", displayName:'Net DV01',width: 80,enableCellEdit: isEdit},
		                    { field: "A_DAILY_DELTA_GROSS", displayName:'Gross DV01',width: 100,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_1M",displayName:'1M', width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_3M",displayName:'3M', width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_6M", displayName:'6M',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_1Y", displayName:'1Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_2Y", displayName:'2Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_3Y", displayName:'3Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_4Y", displayName:'4Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_5Y", displayName:'5Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_6Y", displayName:'6Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_7Y", displayName:'7Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_8Y", displayName:'8Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_9Y", displayName:'9Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_10Y", displayName:'10Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_15Y", displayName:'15Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_20Y", displayName:'20Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_25Y", displayName:'25Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_30Y", displayName:'30Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_LIMIT_50Y", displayName:'50Y',width: 45 ,enableCellEdit: isEdit},
		                    { field: "A_FUND", displayName:'RXM Number',width: 100 ,enableCellEdit: isEdit},
		                    { field: "A_ASSET", displayName:'Asset',width: 55 ,enableCellEdit: isEdit},
		                    { field: "B_GROUP_NAME", displayName:'RXM Group',width: 185 ,enableCellEdit: isEdit}
		                 ]
	};
}]);

function getStringValue(value) {
	return value ? value : '';
}
