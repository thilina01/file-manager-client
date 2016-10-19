
app.controller('energyFormController', function ($scope, $cookies, accountService, appService, energyService) {
    $scope.energyDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.machineNo = '';
    $scope.consumptionRate = '';
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.energyDate = '';
        $scope.shift = '';
        $scope.jobNo = '';
        $scope.machineNo = '';
        $scope.consumptionRate = '';
    }
    $scope.isValid = function () {
        if ($scope.energyDate == '' || $scope.shift == '' || $scope.jobNo == '' || $scope.machineNo == '' || $scope.consumptionRate == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        energyService.save($scope.energyDate, $scope.shift, $scope.jobNo, $scope.machineNo, $scope.consumptionRate).then(
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