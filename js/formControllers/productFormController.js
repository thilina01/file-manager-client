
app.controller('productFormController', function ($scope, $cookies, accountService, appService) {
    $scope.code = '';
    $scope.type = '';
    $scope.description = '';




$scope.clear = function () {
    alert($scope.code + ' ' + $scope.name);
    $scope.code = '';
    $scope.type = '';
    $scope.description = '';
}
});