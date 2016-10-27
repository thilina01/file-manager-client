
app.controller('salesOrderTypeFormController', function ($scope,$timeout, $cookies, accountService, appService, salesOrderTypeService) {
    $scope.salesOrderType = {};
    $scope.saveButtonText = 'Save';
    $scope.clear = function () {
        $scope.salesOrderType = {};
        salesOrderService.toEdit = {};
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
        salesOrderTypeService.save($scope.salesOrderType).then(
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
     $('#salesOrderTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (salesOrderTypeService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.salesOrderType = salesOrderTypeService.toEdit;
            }, 500);
        }
    })
});