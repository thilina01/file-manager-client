
app.controller('currencyFormController', function ($scope, $cookies, accountService, appService, currencyService) {
    $scope.currency = {};
    
    $scope.clear = function () {
        $scope.currency = {};
    }
    $scope.isValid = function () {
        if ($scope.currency.code == '' || $scope.currency.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        currencyService.save($scope.currency).then(
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

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
});
