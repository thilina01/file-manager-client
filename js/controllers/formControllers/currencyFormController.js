
app.controller('currencyFormController', function ($scope,$timeout, $cookies, accountService, appService, currencyService) {
    $scope.currency = {};
     $scope.saveButtonText = 'Save';
    
    $scope.clear = function () {
        $scope.currency = {};
         currencyService.toEdit = {};
         $scope.saveButtonText = 'Save';
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
                        //alert(response.data);
                    }

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
     $('#currencyModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (currencyService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.currency = currencyService.toEdit;
            }, 500);
        }
    })
});
