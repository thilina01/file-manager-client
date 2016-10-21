
app.controller('purchaseOrderFormController', function ($scope, $cookies, accountService, appService, purchaseOrderService, customerService, purchaseOrderTypeService) {
    $scope.purchaseOrder = {};
    $scope.customer = {};
    $scope.purchaseOrderType = {};

    $scope.customers = [];
    $scope.purchaseOrderTypes = [];

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
        // alert($scope.code + ' ' + $scope.name);
        $scope.purchaseOrder = {};
        $scope.customer = {};
        $scope.purchaseOrderType = {};
    }
    $scope.isValid = function () {

        if (
                $scope.purchaseOrder.orderRecivedDate == '' ||
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

    $('#purchaseOrderModal').on('shown.bs.modal', function () {
        $scope.loadCustomers();
        $scope.loadPurchaseOrderTypes();
    })
});