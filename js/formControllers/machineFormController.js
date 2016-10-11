
app.controller('machineFormController', function ($scope, $cookies, accountService, appService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';


$scope.clear = function () {
    alert($scope.code + ' ' + $scope.name);
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
}
});
