var app = angular.module('app', [ 'ngRoute' ]);

app.config(function($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'homeController'
	}).when('/folder', {
		templateUrl : 'pages/folder.html',
		controller : 'folderController'
	})
});

app.controller('homeController', function($scope, $http) {
	$scope.folders = "";
	$scope.load = function() {
		$scope.errorMessage = '';
		$http.get('http://localhost:8080/folders').then(function(response) {
			$scope.folders = response.data;
		});
	}
});

app.controller('folderFormController', function($scope, $http) {
	$scope.name = '';
	$scope.description = '';

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
			$scope.description = '';
			$scope.load(); // this call is important to refresh folder list in index page
			return response;
		});
	}
});

app.controller('loginFormController', function($scope, $http) {
	$scope.email = '';
	$scope.password = '';

	$scope.login = function() {
		$http.post("http://localhost:8080/login", {
			email : $scope.email,
			password : $scope.password
		}, {
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.email = '';
			$scope.password = '';
			$scope.load(); // this call is important to refresh folder list in index page
			return response;
		});
	}
});
app.controller('registerFormController', function($scope, $http) {
	$scope.email = '';
	$scope.password = '';
	$scope.passwordAgain = '';

	$scope.register = function() {
		$http.post("http://localhost:8080/register", {
			email : $scope.email,
			password : $scope.password
		}, {
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			$scope.email = '';
			$scope.password = '';
			$scope.passwordAgain = '';
			$scope.load(); // this call is important to refresh folder list in index page
			return response;
		});
	}
});

app.controller('indexController', function($scope, $http) {

});
app.controller('folderController', function($scope, $http) {

});