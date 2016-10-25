
app.controller('itemTypeFormController', function ($scope,$timeout, $cookies, accountService, appService, itemTypeService) {
    $scope.itemType = {};
     $scope.saveButtonText = 'Save';
    
    $scope.clear = function () {
        $scope.itemType = {};
         itemTypeService.toEdit = {};
        $scope.saveButtonText = 'Save';

    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.type == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        itemTypeService.save( $scope.itemType).then(
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
     $('#itemTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (itemTypeService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.itemType = itemTypeService.toEdit;
            }, 500);
        }
    })
});