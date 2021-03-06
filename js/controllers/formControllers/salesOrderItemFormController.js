
app.controller('salesOrderItemFormController', function ($scope, $timeout, $cookies, accountService, salesOrderService, appService, itemService, salesOrderTypeService, customerService) {
    //main
    $scope.salesOrder = {};
    $scope.rowQuantity = '';
    $scope.rowPrice = '';
    $scope.salesOrderType = {};
    $scope.customerItem = {};

    $scope.totalValue = 0;
    $scope.totalQuantity = 0;
    $scope.salesOrders = [];
    $scope.items = [];
    $scope.salesOrderItemRows = [];
    $scope.customers = [];
    $scope.salesOrderType = [];
    $scope.saveButtonText = 'Save';

    $scope.loadSalesOrderTypes = function () {
        salesOrderTypeService.getAll().then(function (response) {
            $scope.salesOrderTypes = response.data;
        });
    }
    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }
    $scope.addSalesOrderItem = function () {
        if ($scope.salesOrder.salesOrderItemList == undefined) {
            $scope.salesOrder.salesOrderItemList = [];
        }
        var salesOrderItem = {customerItem: $scope.customerItem, item: $scope.customerItem.item, quantity: $scope.rowQuantity, price: $scope.rowPrice};
        $scope.salesOrder.salesOrderItemList.push(salesOrderItem);
        $scope.totalValue += (salesOrderItem.quantity * salesOrderItem.price);
        $scope.totalQuantity += (salesOrderItem.quantity * 1);
        $scope.rowQuantity = '';
        $scope.rowPrice = '';
        $scope.customerItem = {};
        document.getElementById("customerItem").focus();
    };

    $scope.remove = function (index) {
        $scope.totalValue -= ($scope.salesOrder.salesOrderItemList[index].quantity * $scope.salesOrder.salesOrderItemList[index].price);
        $scope.totalQuantity -= ($scope.salesOrder.salesOrderItemList[index].quantity * 1);
        $scope.salesOrder.salesOrderItemList.splice(index, 1);
    }
    $scope.clear = function () {
        $scope.item = {};
        $scope.totalValue = 0;
        $scope.totalQuantity = 0;
        $scope.salesOrderItemRows = [];
        salesOrderService.toEdit = {};
        $scope.salesOrder = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.salesOrderItem.quantity == '' || $scope.salesOrderItem.price == '' || angular.equals($scope.salesOrderItem.item, {}) || angular.equals($scope.salesOrderItem.customer, {}) || angular.equals($scope.salesOrderItem.salesOrderType, {})) {
            return false;
        }
        return true;
    }
    $scope.save = function () {
        $scope.salesOrder.orderReceivedDate = $('#orderReceivedDate1').val();

        /*
         if (!$scope.isValid()) {
         $scope.showError("form not complete");
         return;
         }*/
        salesOrderService.save($scope.salesOrder).then(
                function (response) {

                    $scope.showSuccess("saved");
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
    $('#salesOrderItemModal').on('show.bs.modal', function () {
        $scope.loadSalesOrderTypes();
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