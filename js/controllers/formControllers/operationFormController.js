
app.controller('operationFormController', function ($scope,$timeout, $cookies, accountService, appService, operationService) {

    $scope.operation = {};
    $scope.saveButtonText = 'Save';

    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.operation = {};
         operationService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.operation.code == '' || $scope.operation.description == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }


        operationService.save($scope.operation).then(
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
     $('#operationModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (operationService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.operation = operationService.toEdit;
            }, 500);
        }
    })

});