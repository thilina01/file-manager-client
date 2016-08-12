var app = angular.module('app', [ 'ngRoute' ]);
app.config(function($routeProvider, $locationProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'myController'
	})

	// route for the folder page
	.when('/folder', {
		templateUrl : 'pages/folder.html',
		controller : 'myController'
	})

});

app.controller('myController', function($scope, $http) {

	$scope.folders = '';
	$scope.name = '';
	$scope.description = '';

	$scope.load = function() {
		$scope.errorMessage = '';
		$http.get('http://localhost:8080/folders').then(function(response) {
			$scope.folders = response.data;
			//alert(JSON.stringify($scope.folders));
		});
	}

	$scope.createFolder = function() {

		$http.post("http://localhost:8080/folders", {
			name : $scope.name,
			description : $scope.description
		}, {
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.name = '';
			$scope.load();
	        $location.path("/");
			return response;
		});
	}
});