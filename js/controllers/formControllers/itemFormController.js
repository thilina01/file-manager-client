
app.controller('itemFormController', function ($scope, $cookies, accountService, appService, itemService, itemTypeService, paintService) {
    $scope.item = {};
    $scope.itemType = {};
    $scope.paint = {};

    $scope.itemTypes = [];
    $scope.paints = [];

    $scope.loadItemType = function () {
        itemTypeService.getAll().then(function (response) {
            $scope.itemTypes = response.data;
        });

    }
    $scope.loadPaints = function () {
        paintService.getAll().then(function (response) {
            $scope.paints = response.data;
        });

    }
    $scope.clear = function () {
        $scope.item = {};
        $scope.itemType = {};
        $scope.paint = {};
    }
    $scope.isValid = function () {
        if ($scope.item.code == '' || $scope.item.description == '' || angular.equals($scope.itemType, {}) || angular.equals($scope.paint, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.item.itemType = JSON.parse($scope.itemType);
        $scope.item.paint = JSON.parse($scope.paint);
        itemService.save($scope.item).then(
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
                        //alert(response.data);
                    }
                    $scope.showError("Save faild");
                    return response;
                }
        );
    }
    $('#itemModal').on('shown.bs.modal', function () {
        $scope.loadItemType();
        $scope.loadPaints();
    })
});