
app.controller('purchaseOrderItemFormController', function ($scope, $cookies, accountService, purchaseOrderItemService, appService, itemService, purchaseOrderService) {
    //main
    $scope.purchaseOrderItem = {};
    $scope.purchaseOrder = {};
    $scope.item = {};

    $scope.purchaseOrders = [];
    $scope.items = [];

    $scope.loadItems = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
        });
    }
    $scope.loadPurchaseOrders = function () {
        purchaseOrderService.getAll().then(function (response) {
            $scope.purchaseOrders = response.data;
        });
    }
    $scope.addPurchaseOrderItemRow = function () {
        $scope.purchaseOrderItemRows.push({'item': '', 'customerItem': '', 'quantity': '', 'price': ''});
        $scope.purchaseOrderItemClear();
    };

    $scope.clear = function () {
        $scope.showSuccess("saved");
        //main
        $scope.purchaseOrderItem = {};
        $scope.purchaseOrder = {};
        $scope.item = {};
        //auto 

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
    $('#purchaseOrderItemModal').on('shown.bs.modal', function () {
        alert('fff');
        $scope.loadPurchaseOrders();
        $scope.loadItems();
    })
});