
app.controller('purchaseOrderFormController', function ($scope, $cookies, accountService, appService, purchaseOrderService, customerService) {
    $scope.purchaseOrder = {};
    $scope.customer = {};


    $scope.customers = [];
    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }

    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.purchaseOrder = {};
        $scope.customer = {};
    }
    $scope.isValid = function () {

        if ($scope.purchaseOrder.actualDespatchDate == '' || $scope.purchaseOrder.comments == '' || angular.equals($scope.customer, {}) || $scope.purchaseOrder.customerRequestedDate == '' || $scope.purchaseOrder.orderQty == '' || $scope.purchaseOrder.orderRecivedDate == '' || $scope.purchaseOrder.orderType == '' || $scope.purchaseOrder.poNumber == '' || $scope.purchaseOrder.trwConfirmedDate == '') {
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
        purchaseOrderService.save($scope.job).then(
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
    })
});