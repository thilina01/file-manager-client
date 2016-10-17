
app.controller('costFormController', function ($scope, $cookies, accountService, appService, costService) {
    $scope.code = '';
    $scope.price = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.price = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.price == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        costService.save($scope.code, $scope.price).then(
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
