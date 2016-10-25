
app.controller('purchaseOrderTypeFormController', function ($scope, $cookies, accountService, appService, purchaseOrderTypeService) {
    $scope.purchaseOrderType = {};
    $scope.saveButtonText = 'Save';
    $scope.clear = function () {
        $scope.purchaseOrderType = {};
        purchaseOrderService.toEdit = {};
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
        purchaseOrderTypeService.save($scope.purchaseOrderType).then(
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
     $('#purchaseOrderTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (purchaseOrderTypeService.toEdit.id != undefined) {
            $scope.saveButtonText = 'Update';
            $scope.purchaseOrderType = purchaseOrderTypeService.toEdit;
        }
    })
});