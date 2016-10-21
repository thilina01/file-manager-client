
app.controller('customerItemFormController', function ($scope, $cookies, accountService, appService, customerItemService, customerService) {

    $scope.customerItem = {};
    $scope.customer = {};
    $scope.customers = [];

    $scope.loadSections = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        })
    }

    $scope.clear = function () {
        $scope.customerItem = {};
        $scope.customer = {};
    }
    $scope.isValid = function () {
        if ($scope.customerItem.customer_part_no == '' || $scope.customerItem.price == '' || angular.equals($scope.customer, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.customerItem.customer = JSON.parse($scope.customer);
        customerItemService.save($scope.customerItem).then(
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
                    }
                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
    $('#customerItemModal').on('shown.bs.modal', function () {
        $scope.loadSections();
    })
});
