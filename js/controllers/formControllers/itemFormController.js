
app.controller('itemFormController', function ($scope, $cookies, accountService, appService, itemService) {
    $scope.code = '';
    $scope.Type = '';
    $scope.description = '';




    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.Type = '';
        $scope.description = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.Type == '' || $scope.description == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        itemService.save($scope.code, $scope.Type, $scope.description).then(
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    $scope.clear();
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