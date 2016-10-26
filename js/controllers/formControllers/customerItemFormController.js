
app.controller('customerItemFormController', function ($scope,$timeout, $cookies, accountService, appService, customerItemService, customerService, itemService) {

    $scope.customerItem = {};
    $scope.customers = [];
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
        $scope.item = {};
        customerItemService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.customerItem.customer_part_no == '' || $scope.customerItem.price == '' || angular.equals($scope.customerItem.customer, {}) || angular.equals($scope.customerItem.item, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
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
    $('#customerItemModal').on('show.bs.modal', function () {
        $scope.loadCustomers();
        $scope.loadItems();
        $scope.saveButtonText = 'Save';
        if (customerItemService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.customerItem = customerItemService.toEdit;
            }, 500);
        }
    })
});
