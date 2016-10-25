
app.controller('shiftFormController', function ($scope,$timeout, $cookies, accountService, appService, shiftService) {
    $scope.shift = {};
    $scope.saveButtonText = 'Save';
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.shift = {};
        shiftService.toEdit = {};
        $scope.saveButtonText = 'Save';

    }
    $scope.isValid = function () {
        if ($scope.shift.code == '' || $scope.shift.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        shiftService.save($scope.shift).then(
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
    $('#shiftModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (shiftService.toEdit.id != undefined) {
           $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.shift = shiftService.toEdit;
            }, 500);
        }
    })
});
