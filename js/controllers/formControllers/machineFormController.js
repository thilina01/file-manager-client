
app.controller('machineFormController', function ($scope, $cookies, accountService, appService, machineService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.wcc = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '' || $scope.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        machineService.save($scope.code, $scope.name, $scope.wcc).then(
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
