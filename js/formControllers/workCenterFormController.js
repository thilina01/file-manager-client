
app.controller('workCenterFormController', function ($scope, $cookies, accountService, appService, workCenterService) {
    $scope.code = '';
    $scope.name = '';
    $scope.section = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.section = '';
    }

    $scope.save = function () {
        workCenterService.save($scope.code, $scope.name, $scope.section).then(
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