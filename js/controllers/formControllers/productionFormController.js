
app.controller('productionFormController', function ($scope, $timeout, productionService, appService, controlPointService, shiftService, jobService, machineService,lossTypeService,lossReasonService,manpowerTypeService) {


    //main
    $scope.production = {};
    $scope.controlPoints = [];
    $scope.shifts = [];
    $scope.jobs = [];
     $scope.lossTypes = [];
      $scope.lossReasons = [];
      $scope.manpowerTypes = [];
    
    //auto 

    //production

    // $scope.productionQuantity = '';
    //Quality
    // $scope.qualityJobNo = '';
    //$scope.reason = '';
    //$scope.code = '';
    // $scope.qualityQuantity = '';
    //maintenance
    // $scope.maintenanceJobNo = '';
    $scope.machines = [];
    //$scope.noOfBreakdown = '';
    //$scope.machinerunningTime = '';
    //Hr
    $scope.saveButtonText = 'Save';
    $scope.productionRows = [];
    $scope.qualityRows = [];
    $scope.maintenanceRows = [];
    $scope.hrRows = [];

    $scope.loadShifts = function () {
        shiftService.getAll().then(function (response) {
            $scope.shifts = response.data;
        });
    }
    $scope.loadControlPoints = function () {
        controlPointService.getAll().then(function (response) {
            $scope.controlPoints = response.data;
        });
    }

    $scope.loadJobs = function () {
        jobService.getAll().then(function (response) {
            $scope.jobs = response.data;
        });
    }
    $scope.loadMachines = function () {
        machineService.getAll().then(function (response) {
            $scope.machines = response.data;
        });
    }
    $scope.loadLossTypes = function () {
        lossTypeService.getAll().then(function (response) {
            $scope.lossTypes = response.data;
        });
    }
    
     $scope.loadLossReasons = function () {
        lossReasonService.getAll().then(function (response) {
            $scope.lossReasons = response.data;
        });
    }
    $scope.loadManpowerTypes = function () {
        
        alert("ghhj");
        manpowerTypeService.getAll().then(function (response) {
            $scope.manpowerTypes = response.data;
        });
    }
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
                        $scope.showError(response.data.message);
                        return response;
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
    $('#productionModal').on('show.bs.modal', function () {
        $scope.loadShifts();
        $scope.loadJobs();
        $scope.loadControlPoints();
        $scope.loadMachines();
        $scope.loadLossTypes();
        $scope.loadLossReasons();
         $scope.loadManpowerTypes();
        $scope.saveButtonText = 'Save';
        if (productionService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.production = productionService.toEdit;
            }, 500);
        }
    })
});