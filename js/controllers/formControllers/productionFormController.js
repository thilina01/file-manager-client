
app.controller('productionFormController', function ($scope, $cookies, accountService, productionService, appService) {
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

    $scope.productionRows = [];
    $scope.qualityRows = [];
    $scope.maintenanceRows = [];
    $scope.hrRows = [];

    $scope.addProductionRow = function () {
        $scope.productionRows.push({'item': '', 'job': $scope.productionJobNo, 'quantity': $scope.productionQuantity, 'reason': ''});
        $scope.productionClear();
    };
    $scope.addQualityRow = function () {
        $scope.qualityRows.push({'item': '', 'job': $scope.qualityJobNo, 'quantity': $scope.qualityQuantity, 'type': '', category: ''});
        $scope.qualityClear()();
    };

    $scope.productionClear = function () {
        $scope.productionJobNo = '';
        $scope.productionQuantity = '';
    }
    $scope.qualityClear = function () {
        $scope.qualityJobNo = '';
        $scope.reason = '';
        $scope.code = '';
        $scope.qualityQuantity = '';
    }
    $scope.maintenanceClear = function () {
        $scope.maintenanceJobNo = '';
        $scope.machineNo = '';
        $scope.noOfBreakdown = '';
        $scope.machinerunningTime = '';
    }
    $scope.hrClear = function () {
        $scope.hrJobNo = '';
        $scope.company = '';
        $scope.contract = '';
        $scope.help = '';
        $scope.other = '';
    }
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        //main
        $scope.date = '';
        $scope.shift = '';
        $scope.controlPointCode = '';
        //auto 
        $scope.controlPointName = '';
        //production
        $scope.productionClear();
        //Quality
        $scope.qualityClear();
        //maintenance
        $scope.maintenanceClear();
        //Hr
        $scope.hrClear();
    }

    $scope.save = function () {
        productionService.save($scope.date, $scope.shift, $scope.controlPointCode).then(
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