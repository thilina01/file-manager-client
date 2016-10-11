
app.controller('productFormController', function ($scope, $cookies, accountService, appService, productService) {
    $scope.code = '';
    $scope.type = '';
    $scope.description = '';




    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.type = '';
        $scope.description = '';
    }
    $scope.save = function () {
        productService.save($scope.code, $scope.type, $scope.description).then(
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
});