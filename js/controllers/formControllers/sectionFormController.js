
app.controller('sectionFormController', function ($scope, $cookies, sectionService, appService) {
    $scope.section = {};
    $scope.saveButtonText = 'Save';
   
    $scope.clear = function () {
       $scope.section = {};
       sectionService.toEdit = {};
        $scope.saveButtonText = 'Save';
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
        sectionService.save($scope.section).then(
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
     $('#sectionModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (sectionService.toEdit.id != undefined) {
            $scope.saveButtonText = 'Update';
            $scope.section = sectionService.toEdit;
        }
    })

});