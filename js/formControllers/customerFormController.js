
app.controller('customerFormController', function ($scope, $cookies, accountService, appService, customerService) {
    $scope.code = '';
    $scope.name = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
    }

    $scope.save = function () {
        customerService.save($scope.code, $scope.name).then(
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
