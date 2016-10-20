
app.controller('customerItemFormController', function ($scope, $cookies, accountService, appService, customerItemService, sectionService) {

    $scope.customerItem = {};
    $scope.section = {};
    $scope.sections = [];

    $scope.loadSections = function () {
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;
        })
    }

    $scope.clear = function () {
        $scope.customerItem = {};
        $scope.section = {};
    }
    $scope.isValid = function () {
        if ($scope.customerItem.code == '' || $scope.customerItem.name == '' || angular.equals($scope.section, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.customerItem.section = JSON.parse($scope.section);
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
