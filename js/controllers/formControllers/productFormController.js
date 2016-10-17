
app.controller('productFormController', function ($scope, $cookies, accountService, appService, productService) {
    $scope.code = '';
    $scope.productType = '';
    $scope.description = '';




    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.productType = '';
        $scope.description = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.productType == '' || $scope.description == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        productService.save($scope.code, $scope.productType, $scope.description).then(
                function (response) {
                    if (response.data) {
                        //alert(response.data);
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        //alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
});