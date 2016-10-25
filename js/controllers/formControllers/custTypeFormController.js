
app.controller('custTypeFormController', function ($scope, $cookies, custTypeService, appService) {
    $scope.custType = {};
    
    $scope.clear = function () {
       $scope.custType = {};
    }

    $scope.isValid = function () {
        if ($scope.custType.code == '' || $scope.custType.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        custTypeService.save($scope.custType).then(
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
                    $scope.showError("Unable to save");

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }

});