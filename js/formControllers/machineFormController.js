
app.controller('machineFormController', function ($scope, $cookies, accountService, appService, machineService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.wcc = '';
    }

    $scope.save = function () {
        machineService.save($scope.code, $scope.name, $scope.wcc).then(
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
