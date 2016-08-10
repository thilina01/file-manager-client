var app = angular.module('app', []);
app.controller(
	'myController', function ($scope, $http) {
		
		$scope.folders = '';

		$scope.load = function () {
			
		$scope.errorMessage='';
			$http.get(
				'http://localhost:8080/'
			).then(
				function (response) {
					$scope.folders = response.data;
					//alert(JSON.stringify(response.data));
				}
			);
		}
	}
);