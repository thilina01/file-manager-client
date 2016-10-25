
app.controller('scrapTypeFormController', function ($scope,$timeout, $cookies, accountService, scrapTypeService, appService) {
    $scope.scrapType = {};
    $scope.saveButtonText = 'Save';
  
    $scope.clear = function () {
        $scope.scrapType = {};
       scrapTypeService.toEdit = {};
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
        scrapTypeService.save( $scope.scrapType).then(
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
    $('#scrapTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (scrapTypeService.toEdit.id != undefined) {
           $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.scrapType = scrapTypeService.toEdit;
            }, 500);
        }
    })
});