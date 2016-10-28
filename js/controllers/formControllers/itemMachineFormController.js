
app.controller('itemMachineFormController', function ($scope, $timeout, $cookies, accountService, appService, itemMachineService, itemService,machineService) {

    $scope.itemMachine = {};
    $scope.items = [];
    $scope.machines = [];
    $scope.saveButtonText = 'Save';

    $scope.loadItems = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
        })
    }

    $scope.clear = function () {
        $scope.itemMachine= {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.itemMachine.consumptionRate == '' ||  angular.equals($scope.itemMachine.item, {}) ||  angular.equals($scope.itemMachine.machine, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        itemMachineService.save($scope.itemMachine).then(
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
    $('#itemMachineModal').on('show.bs.modal', function () {
        $scope.loadItems();
         $scope.loadMachines();
        $scope.saveButtonText = 'Save';
        if (itemMachineService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.itemMachine = itemMachineService.toEdit;
            }, 500);
        }
    })
});
