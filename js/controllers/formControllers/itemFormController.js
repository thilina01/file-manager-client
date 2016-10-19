
app.controller('itemFormController', function ($scope, $cookies, accountService, appService, itemService) {
        $scope.item = {};
        $scope.itemType = {};
        $scope.itemTypes = [];
        
        $scope.loadItemType = function () {
        itemTypeService.getAll().then(function (response) {
        $scope.itemTypes = response.data;
        });
        
        }
                $scope.clear = function () {
                // alert($scope.code + ' ' + $scope.name);
                        $scope.item = {};
                        $scope.itemType = {};
                }
        $scope.isValid = function () {
        if ($scope.item.code == '' || angular.equals($scope.itemType, {}) || $scope.item.description == '') {
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
        itemService.save($scope.itemType).then(
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
    })
        });