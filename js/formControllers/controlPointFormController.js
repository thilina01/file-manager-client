
app.controller('controlPointFormController', function ($scope, $cookies, accountService, appService, controlPointService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
    $scope.section = '';



    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.wcc = '';
        $scope.section = '';
    }

    $scope.save = function () {
        controlPointService.save($scope.code, $scope.name, $scope.wcc, $scope.section).then(
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