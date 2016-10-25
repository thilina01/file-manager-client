
app.controller('customerItemFormController', function ($scope, $cookies, accountService, appService, customerItemService, customerService, itemService) {

    $scope.customerItem = {};
    $scope.customer = {};
    $scope.customers = [];
    $scope.item = {};
    $scope.items = [];
      $scope.saveButtonText = 'Save';

    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        })
    }
    $scope.loadItems = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
        })
    }

    $scope.clear = function () {
        $scope.customerItem = {};
        $scope.customer = {};
        $scope.item = {};
        customerItemService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.customerItem.customer_part_no == '' || $scope.customerItem.price == '' || angular.equals($scope.customer, {}) || angular.equals($scope.item, {})) {
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
        $scope.customerItem.item = JSON.parse($scope.item);
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
                        $scope.showError(response.data.message);
                    }
                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
    $('#customerItemModal').on('shown.bs.modal', function () {
        $scope.loadCustomers();
        $scope.loadItems();
        $scope.saveButtonText = 'Save';
        if (customerItemService.toEdit.id != undefined) {
            $scope.saveButtonText = 'Update';
            $scope.customerItem= customerItemService.toEdit;
        }
    })
});
