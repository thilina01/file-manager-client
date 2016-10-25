
app.controller('purchaseOrderItemFormController', function ($scope,$timeout, $cookies, accountService, purchaseOrderItemService, appService, itemService, purchaseOrderService) {
    //main
    $scope.purchaseOrderItem = {};
    $scope.purchaseOrder = {};
    $scope.item = {};
    $scope.rowQuantity = '';
    $scope.rowPrice = '';

    $scope.purchaseOrders = [];
    $scope.items = [];
    $scope.purchaseOrderItemRows = [];
    $scope.saveButtonText = 'Save';

    $scope.fillItems = function () {
    }
    $scope.loadPurchaseOrders = function () {
        purchaseOrderService.getAll().then(function (response) {
            $scope.purchaseOrders = response.data;
        });
    }
    $scope.addPurchaseOrderItemRow = function () {
        var row = {'item': JSON.parse($scope.item), 'customerItem': 'dd', 'quantity': $scope.rowQuantity, 'price': $scope.rowPrice};
        $scope.purchaseOrderItemRows.push(row);
        $scope.rowQuantity = '';
        $scope.rowPrice = '';
    };

    $scope.clear = function () {
        $scope.purchaseOrderItem = {};
        $scope.purchaseOrder = {};
        $scope.item = {};
        $scope.purchaseOrderItemRows = [];
        purchaseOrderItemService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.purchaseOrderItem.quantity == '' || $scope.purchaseOrderItem.price == '' || angular.equals($scope.item, {}) || angular.equals($scope.purchaseOrder, {})) {
            return false;
        }
        return true;
    }
    $scope.save = function () {

        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.job.item = JSON.parse($scope.item);
        $scope.job.purchaseOrder = JSON.parse($scope.customer);
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
        $scope.loadPurchaseOrders();
        $scope.saveButtonText = 'Save';
        if (purchaseOrderItemService.toEdit.id != undefined) {
             $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.purchaseOrderItem = purchaseOrderItemService.toEdit;
            }, 500);
        }
    })
});