
app.controller('purchaseOrderFormController', function ($scope,$timeout, $cookies, accountService, appService, purchaseOrderService, customerService, purchaseOrderTypeService) {
    $scope.purchaseOrder = {};
    $scope.customer = {};
    $scope.purchaseOrderType = {};
    $scope.orderReceivedDate = '';

    $scope.customers = [];
    $scope.purchaseOrderTypes = [];
    $scope.saveButtonText = 'Save'; 
    
    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }

    $scope.loadPurchaseOrderTypes = function () {
        purchaseOrderTypeService.getAll().then(function (response) {
            $scope.purchaseOrderTypes = response.data;
        });
    }

    $scope.clear = function () {
        $scope.purchaseOrder = {};
        $scope.customer = {};
        $scope.purchaseOrderType = {};
        purchaseOrderService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        $scope.purchaseOrder.orderReceivedDate = $('#orderReceivedDate').val();
        $scope.purchaseOrder.trwConfirmedDate = $('#trwConfirmedDate').val();
        $scope.purchaseOrder.customerRequestedDate = $('#customerRequestedDate').val();
        $scope.purchaseOrder.actualDispatchedDate = $('#actualDispatchedDate').val();

        if (
                $scope.purchaseOrder.orderReceivedDate == '' ||
                $scope.purchaseOrder.trwConfirmedDate == '' ||
                $scope.purchaseOrder.customerRequestedDate == '' ||
                $scope.purchaseOrder.actualDispatchedDate == '' ||
                $scope.purchaseOrder.poNumber == '' ||
                $scope.purchaseOrder.comments == '' ||
                angular.equals($scope.customer, {}) ||
                angular.equals($scope.purchaseOrderType, {})
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

        $scope.purchaseOrder.customer = JSON.parse($scope.customer);
        $scope.purchaseOrder.purchaseOrderType = JSON.parse($scope.purchaseOrderType);
        purchaseOrderService.save($scope.purchaseOrder).then(
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

    $('#purchaseOrderModal').on('show.bs.modal', function () {
        $scope.loadCustomers();
        $scope.loadPurchaseOrderTypes();
         $scope.saveButtonText = 'Save';
        if (purchaseOrderService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.purchaseOrder = purchaseOrderService.toEdit;
            }, 500);
        }
    })
});