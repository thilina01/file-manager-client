
app.controller('productionFormController', function ($scope, $cookies, accountService, appService) {
    //main
    $scope.date = '';
    $scope.shift = '';
    $scope.controlPointCode = '';
    //auto 
    $scope.controlPointName = '';
    //production
    $scope.productionJobNo = '';
    $scope.productionQuantity = '';
    //Quality
    $scope.qualityJobNo = '';
    $scope.reason = '';
    $scope.code = '';
    $scope.qualityQuantity = '';
    //maintenance
    $scope.maintenanceJobNo = '';
    $scope.machineNo = '';
    $scope.noOfBreakdown = '';
    $scope.machinerunningTime = '';
    //Hr
    $scope.hrJobNo = '';
    $scope.company = '';
    $scope.contract = '';
    $scope.help = '';

    $scope.other = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        //main
        $scope.date = '';
        $scope.shift = '';
        $scope.controlPointCode = '';
        //auto 
        $scope.controlPointName = '';
        //production
        $scope.productionJobNo = '';
        $scope.productionQuantity = '';
        //Quality
        $scope.qualityJobNo = '';
        $scope.reason = '';
        $scope.code = '';
        $scope.qualityQuantity = '';
        //maintenance
        $scope.maintenanceJobNo = '';
        $scope.machineNo = '';
        $scope.noOfBreakdown = '';
        $scope.machinerunningTime = '';
        //Hr
        $scope.hrJobNo = '';
        $scope.company = '';
        $scope.contract = '';
        $scope.help = '';

        $scope.other = '';
    }

    $scope.save = function () {
        workCenterService.save($scope.date, $scope.shift, $scope.controlPointCode).then(
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