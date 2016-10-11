
app.controller('breakdownFormController', function ($scope, $cookies, appService, breakdownService) {
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

    $scope.save = function () {
        breakdownService.save($scope.breakdownDate, $scope.shift, $scope.jobNo, $scope.controlPoint, $scope.machine, $scope.numberOfBreakdown, $scope.breakdownTime).then(
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }

});