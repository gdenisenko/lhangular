var services = angular.module('myServices', ['ngResource']);

services.factory('Manager', ['$resource', function($resource) {
	return $resource('rest/manager/:id', {}, {
		all : {method : 'GET', params : {id : 'all'}, isArray : true}
	});
}]);