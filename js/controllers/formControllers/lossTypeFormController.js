app.controller('lossTypeFormController', function ($scope, $timeout, $cookies, accountService, appService, lossTypeService) {
    $scope.lossType = {};
    $scope.saveButtonText = 'Save';

    $scope.clear = function () {
        $scope.lossType = {};
        lossTypeService.toEdit = {};
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
        lossTypeService.save($scope.lossType).then(
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
    $('#lossTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (lossTypeService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.lossType = lossTypeService.toEdit;
            }, 500);
        }
    })
});
