var myApp = angular.module('myApp', ['ngGrid', 'myServices', 'ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/managers', {
			templateUrl : 'partials/managers.html',
			controller : 'managersCntrl'
		}).
		when('/funds/:managerName', {
			templateUrl : 'partials/funds.html',
			controller : 'fundsCntrl'
		}).	
		otherwise({
			redirectTo: '/managers'
		});
}]);

var uploadApp = angular.module('uploadApp', []);

uploadApp.controller('uploadCntrl', function($scope) {
	$scope.val = 'lala';
});