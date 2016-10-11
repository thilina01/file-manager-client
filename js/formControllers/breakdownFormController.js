
app.controller('breakdownFormController', function ($scope, $cookies, appService) {
    $scope.breakdownDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.controlPoint = '';
    $scope.machine = '';
    $scope.numberOfBreakdown = '';
    $scope.breakdownTime = '';

    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.breakdownDate = '';
        $scope.shift = '';
        $scope.jobNo = '';
        $scope.controlPoint = '';
        $scope.machine = '';
        $scope.numberOfBreakdown = '';
        $scope.breakdownTime = '';
    }
});