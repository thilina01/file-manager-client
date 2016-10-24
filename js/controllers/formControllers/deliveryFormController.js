
app.controller('deliveryFormController', function ($scope, $cookies, accountService, appService, jobService, itemService, purchaseOrderService) {
    $scope.delivery = {};
    $scope.item = {};
    $scope.purchaseOrder = {};

    $scope.items = [];
    $scope.purchaseOrders = [];
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
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.delivery = {};
        $scope.item = {};
        $scope.purchaseOrder = {};
    }
    $scope.isValid = function () {

        if ($scope.delivery.deliveryDate == '' || $scope.delivery.quantity == '' || angular.equals($scope.item, {}) || angular.equals($scope.purchaseOrder, {}) || $scope.delivery.location == '') {
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
        $scope.job.purchaseOrder = JSON.parse($scope.purchaseOrder);
       deliveryService.save($scope.deliveryDate, $scope.quantity,$scope.location, $scope.itemCode, $scope.purchaseOrderpoNumber).then(
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
    $('#deliveryModal').on('shown.bs.modal', function () {
        $scope.loadItems();
    })
    $('#deliveryModal').on('shown.bs.modal', function () {
        $scope.loadPurchaseOrders();
    })
});