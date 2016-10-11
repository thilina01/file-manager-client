
app.controller('energyFormController', function ($scope, $cookies, accountService, appService) {
    $scope.energyDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.machineNo = '';
    $scope.consumptionRate = '';
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.energyDate = '';
        $scope.shift = '';
        $scope.jobNo = '';
        $scope.machineNo = '';
        $scope.consumptionRate = '';
    }
});