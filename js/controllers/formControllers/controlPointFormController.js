
app.controller('controlPointFormController', function ($scope, $cookies, accountService, appService, controlPointService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
    $scope.section = '';



    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.wcc = '';
        $scope.section = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '' || $scope.wcc == '' || $scope.section == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        controlPointService.save($scope.code, $scope.name, $scope.wcc, $scope.section).then(
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