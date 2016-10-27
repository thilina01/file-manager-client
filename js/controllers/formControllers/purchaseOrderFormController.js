
app.controller('salesOrderFormController', function ($scope,$timeout, $cookies, accountService, appService, salesOrderService, customerService, salesOrderTypeService) {
    $scope.salesOrder = {};
    $scope.orderReceivedDate = '';

    $scope.customers = [];
    $scope.salesOrderTypes = [];
    $scope.saveButtonText = 'Save'; 
    
    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }

    $scope.loadPurchaseOrderTypes = function () {
        salesOrderTypeService.getAll().then(function (response) {
            $scope.salesOrderTypes = response.data;
        });
    }

    $scope.clear = function () {
        $scope.salesOrder = {};
        salesOrderService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        $scope.salesOrder.orderReceivedDate = $('#orderReceivedDate').val();
        $scope.salesOrder.trwConfirmedDate = $('#trwConfirmedDate').val();
        $scope.salesOrder.customerRequestedDate = $('#customerRequestedDate').val();
        $scope.salesOrder.actualDispatchedDate = $('#actualDispatchedDate').val();

        if (
                $scope.salesOrder.orderReceivedDate == '' ||
                $scope.salesOrder.trwConfirmedDate == '' ||
                $scope.salesOrder.customerRequestedDate == '' ||
                $scope.salesOrder.actualDispatchedDate == '' ||
                $scope.salesOrder.poNumber == '' ||
                $scope.salesOrder.comments == '' ||
                angular.equals($scope.salesOrder.customer, {}) ||
                angular.equals($scope.salesOrder.salesOrderType, {})
                )
        {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }

        salesOrderService.save($scope.salesOrder).then(
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

    $('#salesOrderModal').on('show.bs.modal', function () {
        $scope.loadCustomers();
        $scope.loadPurchaseOrderTypes();
         $scope.saveButtonText = 'Save';
        if (salesOrderService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.salesOrder = salesOrderService.toEdit;
            }, 500);
        }
    })
});