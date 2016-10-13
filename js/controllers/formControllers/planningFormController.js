
app.controller('planningFormController', function ($scope, $cookies, accountService, appService, planningService) {
    $scope.planningDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.controlPoint = '';
    //auto

    $scope.controlPointName = '';
    $scope.wcc = '';
    $scope.section = '';
    //
    $scope.planQty = '';
    $scope.company = '';
    $scope.contract = '';
    $scope.help = '';
    $scope.other = '';

    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.planningDate = '';
        $scope.shift = '';
        $scope.jobNo = '';
        $scope.controlPoint = '';

        $scope.controlPointName = '';
        $scope.wcc = '';
        $scope.section = '';

        $scope.planQty = '';
        $scope.company = '';
        $scope.contract = '';
        $scope.help = '';
        $scope.other = '';
    }
    $scope.save = function () {
        planningService.save($scope.planningDate, $scope.shift, $scope.jobNo, $scope.controlPoint, $scope.controlPointName, $scope.wcc, $scope.section, $scope.planQty, $scope.company, $scope.contract, $scope.help, $scope.other).then(
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    $scope.clear();
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
