var myApp = angular.module('myApp', ['ngGrid', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/rxms', {
			templateUrl : 'partials/rxms_list.html',
			controller : 'rxmsCntrl'
		}).
		when('/rxm/:rxmNumber', {
			templateUrl : 'partials/rxm_2.html',
			controller : 'rxmDetailsCntrl'
		}).
		when('/rxm/:rxmNumber/:mode', {
			templateUrl : 'partials/rxm_2.html',
			controller : 'rxmDetailsCntrl'
		}).	
		otherwise({
			redirectTo: '/rxms'
		});
}]);

