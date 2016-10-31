
app.controller('manpowerTypeFormController', function ($scope,$timeout, $cookies, accountService, manpowerTypeService, appService) {
    $scope.manpowerType = {};
    $scope.saveButtonText = 'Save';
  
    $scope.clear = function () {
        $scope.manpowerType = {};
       manpowerTypeService.toEdit = {};
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
        manpowerTypeService.save( $scope.manpowerType).then(
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
    $('#manpowerTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (manpowerTypeService.toEdit.id != undefined) {
           $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.manpowerType = manpowerTypeService.toEdit;
            }, 500);
        }
    })
});