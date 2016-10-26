
app.controller('saleTypeFormController', function ($scope,$timeout, $cookies, saleTypeService, appService) {
    $scope.saleType = {};
     $scope.saveButtonText = 'Save';
    
    $scope.clear = function () {
       $scope.saleType = {};
       saleTypeService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }

    $scope.isValid = function () {
        if ($scope.saleType.code == '' || $scope.saleType.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        saleTypeService.save($scope.saleType).then(
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
                    }
                    $scope.showError("Unable to save");

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
    $('#saleTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (saleTypeService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.saleType = saleTypeService.toEdit;
            }, 500);
        }
    })

});