
app.controller('itemTypeFormController', function ($scope, $cookies, accountService, appService, itemTypeService) {
    $scope.code = '';
    $scope.type = '';
    ;




    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.type = '';

    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.type == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        itemTypeService.save($scope.code, $scope.type).then(
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
                        $scope.showError(response.data.message);
                        return response;
                    }
                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
});