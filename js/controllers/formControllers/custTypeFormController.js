
app.controller('custTypeFormController', function ($scope, $cookies, custTypeService, appService) {
    $scope.code = '';
    $scope.name = '';

    $scope.clear = function () {
        $scope.code = '';
        $scope.name = '';
    }

    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        custTypeService.save($scope.code, $scope.name).then(
                function (response) {
                    if (response.data) {
                        $scope.showSuccess("saved");
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                    }
                    $scope.showError("Save faild");
                    //$scope.reloadApp();
                    return response;
                }
        );
    }

});