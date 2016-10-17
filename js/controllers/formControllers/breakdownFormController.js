
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
    $scope.isValid = function () {
        if ($scope.breakdownDate == '' || $scope.shift == '' || $scope.jobNo == '' || $scope.controlPoint == '' || $scope.machine == '' || $scope.numberOfBreakdown == '' || $scope.breakdownTime == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        breakdownService.save($scope.breakdownDate, $scope.shift, $scope.jobNo, $scope.controlPoint, $scope.machine, $scope.numberOfBreakdown, $scope.breakdownTime).then(
                function (response) {
                    if (response.data) {
                        //alert(response.data);
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        //alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }

});