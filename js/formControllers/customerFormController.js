
app.controller('customerFormController', function ($scope, $cookies, accountService, appService) {
    $scope.code = '';
    $scope.name = '';
   
  
 $scope.clear = function () {
        alert($scope.code+' '+$scope.name);
        $scope.code = '';
        $scope.name = '';
    }

});
