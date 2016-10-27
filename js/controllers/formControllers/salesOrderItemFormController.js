
app.controller('salesOrderItemFormController', function ($scope, $timeout, $cookies, accountService, salesOrderService, appService, itemService, salesOrderTypeService, customerService) {
    //main
    $scope.salesOrder = {};
    $scope.rowQuantity = '';
    $scope.rowPrice = '';
    $scope.salesOrderType = {};
    $scope.customerItem = {};

    $scope.salesOrders = [];
    $scope.items = [];
    $scope.salesOrderItemRows = [];
    $scope.customers = [];
    $scope.salesOrderType = [];
    $scope.saveButtonText = 'Save';

    $scope.loadPurchaseOrderTypes = function () {
        salesOrderTypeService.getAll().then(function (response) {
            $scope.salesOrderTypes = response.data;
        });
    }
    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }
    $scope.addPurchaseOrderItem = function () {
        if ($scope.salesOrder.salesOrderHasItemList == undefined) {
            $scope.salesOrder.salesOrderHasItemList = [];
        }
        var salesOrderHasItem = {customerItem: $scope.customerItem, item: $scope.customerItem.item, quantity: $scope.rowQuantity, price: $scope.rowPrice};
        $scope.salesOrder.salesOrderHasItemList.push(salesOrderHasItem);
        $scope.rowQuantity = '';
        $scope.rowPrice = '';
        $scope.customerItem = {};
    };

    $scope.clear = function () {
        $scope.item = {};
        $scope.salesOrderItemRows = [];
        salesOrderService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.salesOrderItem.quantity == '' || $scope.salesOrderItem.price == '' || angular.equals($scope.salesOrderItem.item, {}) || angular.equals($scope.salesOrderItem.customer, {}) || angular.equals($scope.salesOrderItem.salesOrderType, {})) {
            return false;
        }
        return true;
    }
    $scope.save = function () {
        /*
         if (!$scope.isValid()) {
         $scope.showError("form not complete");
         return;
         }*/
        salesOrderService.save($scope.salesOrder).then(
                function (response) {
                    if (response.data) {
                        //alert(response.data);
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
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
    $('#salesOrderItemModal').on('show.bs.modal', function () {
        $scope.loadPurchaseOrderTypes();
        $scope.loadCustomers();
        $scope.saveButtonText = 'Save';
        if (salesOrderService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.salesOrderItem = salesOrderService.toEdit;
            }, 500);
        }
    })
});