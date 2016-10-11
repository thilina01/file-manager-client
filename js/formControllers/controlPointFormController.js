
app.controller('controlPointFormController', function ($scope, $cookies, accountService, appService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
    $scope.section = '';



$scope.clear = function () {
    alert($scope.code + ' ' + $scope.name);
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
    $scope.section = '';
}
});