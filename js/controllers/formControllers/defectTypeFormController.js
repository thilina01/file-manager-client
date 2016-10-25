app.controller('defectTypeFormController', function ($scope, $timeout, $cookies, accountService, appService, defectTypeService) {
    $scope.defectType = {};
    $scope.saveButtonText = 'Save';

    $scope.clear = function () {
        $scope.defectType = {};
        defectTypeService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.type == '' || $scope.typeInSinhala == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        defectTypeService.save($scope.defectType).then(
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
    $('#defectTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (defectTypeService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.defectType = defectTypeService.toEdit;
            }, 500);
        }
    })
});
