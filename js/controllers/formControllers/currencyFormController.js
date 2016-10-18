
app.controller('currencyFormController', function ($scope, $cookies, accountService, appService, currencyService) {
    $scope.code = '';
    $scope.name = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
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
        currencyService.save($scope.code, $scope.name).then(
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
                        alert(response.data);
                    }
                    
                    $scope.showError("Save faild");
                    return response;
                }
        );
    }
});
