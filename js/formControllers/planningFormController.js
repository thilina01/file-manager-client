
app.controller('planningFormController', function ($scope, $cookies, accountService, appService) {
    $scope.planningDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.controlPoint = '';
    //auto
    
    $scope.controlPointName = '';
    $scope.wcc = '';
    $scope.section = '';
    //
    $scope.planQty = '';
    $scope.company = '';
    $scope.contract = '';
    $scope.help = '';
    $scope.other = '';

 $scope.clear = function () {
        alert($scope.code+' '+$scope.name);
         $scope.planningDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.controlPoint = '';
   
    $scope.controlPointName = '';
    $scope.wcc = '';
    $scope.section = '';
   
    $scope.planQty = '';
    $scope.company = '';
    $scope.contract = '';
    $scope.help = '';
    $scope.other = '';
    }

});
