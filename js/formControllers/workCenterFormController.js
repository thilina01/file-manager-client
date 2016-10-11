
app.controller('workCenterFormController', function ($scope, $cookies, accountService, appService) {
    $scope.code = '';
    $scope.name = '';
    $scope.section = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.section = '';
    }
});