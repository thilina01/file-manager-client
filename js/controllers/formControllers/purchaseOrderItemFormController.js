
app.controller('purchaseOrderItemFormController', function ($scope, $timeout, $cookies, accountService, purchaseOrderItemService, appService, itemService, purchaseOrderTypeService, customerService) {
    //main
    $scope.purchaseOrderItem = {};
    $scope.rowQuantity = '';
    $scope.rowPrice = '';
    $scope.customer = {};
    $scope.purchaseOrderType = {};

    $scope.purchaseOrders = [];
    $scope.items = [];
    $scope.purchaseOrderItemRows = [];
    $scope.customers = [];
    $scope.purchaseOrderType = [];
    $scope.saveButtonText = 'Save';

    $scope.fillItems = function () {
    }
    $scope.loadPurchaseOrderTypes = function () {
        purchaseOrderTypeService.getAll().then(function (response) {
            $scope.purchaseOrderTypes = response.data;
        });
    }
    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }
    $scope.addPurchaseOrderItemRow = function () {
        var row = {'item': JSON.parse($scope.item), 'customerItem': 'dd', 'quantity': $scope.rowQuantity, 'price': $scope.rowPrice};
        $scope.purchaseOrderItemRows.push(row);
        $scope.rowQuantity = '';
        $scope.rowPrice = '';
    };

    $scope.clear = function () {
        $scope.item = {};
        $scope.purchaseOrderItemRows = [];
        purchaseOrderItemService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.purchaseOrderItem.quantity == '' || $scope.purchaseOrderItem.price == '' || angular.equals($scope.purchaseOrderItem.item, {}) || angular.equals($scope.purchaseOrderItem.customer, {}) || angular.equals($scope.purchaseOrderItem.purchaseOrderType, {})) {
            return false;
        }
        return true;
    }
    $scope.save = function () {

        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        purchaseOrderItemService.save($scope.date, $scope.shift, $scope.itemCode, $scope.purchaseOrderpoNumber).then(
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
    $('#purchaseOrderItemModal').on('show.bs.modal', function () {
        $scope.loadPurchaseOrderTypes();
        $scope.loadCustomers();
        $scope.saveButtonText = 'Save';
        if (purchaseOrderItemService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.purchaseOrderItem = purchaseOrderItemService.toEdit;
            }, 500);
        }
    })
});