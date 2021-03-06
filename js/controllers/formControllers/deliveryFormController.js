
app.controller('deliveryFormController', function ($scope,$timeout, $cookies, accountService, appService, itemService, salesOrderService,deliveryService) {
    $scope.delivery = {};
    $scope.item = {};
    $scope.salesOrder = {};

    $scope.items = [];
    $scope.salesOrders = [];
     $scope.saveButtonText = 'Save';
    $scope.loadItems = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
        });
    }
    $scope.loadPurchaseOrders = function () {
        salesOrderService.getAll().then(function (response) {
            $scope.salesOrders = response.data;
        });
    }
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.delivery = {};
        $scope.item = {};
        $scope.salesOrder = {};
         deliveryService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {

        if ($scope.delivery.deliveryDate == '' || $scope.delivery.quantity == '' || angular.equals($scope.item, {}) || angular.equals($scope.salesOrder, {}) || $scope.delivery.location == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.delivery.item = JSON.parse($scope.item);
        $scope.delivery.salesOrder = JSON.parse($scope.salesOrder);
        deliveryService.save($scope.delivery).then(
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
    $('#deliveryModal').on('show.bs.modal', function () {
        $scope.loadItems();
        $scope.loadPurchaseOrders();
        $scope.saveButtonText = 'Save';
        if (deliveryService.toEdit.id != undefined) {
          $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.delivery = deliveryService.toEdit;
            }, 500);
        }
    })
});