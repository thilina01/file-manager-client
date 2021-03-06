
app.controller('controlPointRunFormController', function ($scope, $timeout, controlPointRunService, appService, controlPointService, shiftService, jobService, jobTypeService, operationService, machineService, lossTypeService, lossReasonService, manpowerTypeService) {
    //main
    $scope.controlPointRun = {};
    $scope.controlPoints = [];
    $scope.shifts = [];
    $scope.jobs = [];
    $scope.jobTypes = [];
    $scope.operations = [];
    $scope.lossTypes = [];
    $scope.lossReasons = [];
    $scope.manpowerTypes = [];

    $scope.lossType = {};

    $scope.machines = [];

    $scope.saveButtonText = 'Save';

    $scope.jobQuantity = '';

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

    $scope.loadJobTypes = function () {
        jobTypeService.getAll().then(function (response) {
            $scope.jobTypes = response.data;
        });
    }

    $scope.loadOperations = function () {
        operationService.getAll().then(function (response) {
            $scope.operations = response.data;
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


        manpowerTypeService.getAll().then(function (response) {
            $scope.manpowerTypes = response.data;
        });
    }




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
    $scope.brakdownClear = function () {
        $scope.machineNo = '';
        $scope.brakdown = '';
        $scope.reason = '';
    }
    $scope.clear = function () {
        $scope.controlPointRun = {};
    }

    $scope.addControlPointRunManpower = function () {
        if ($scope.controlPointRun.controlPointRunManpowerList == undefined) {
            $scope.controlPointRun.controlPointRunManpowerList = [];
        }
        var controlPointRunManpower = {manpowerType: $scope.manpowerType, count: $scope.manpowerQuantity};
        $scope.controlPointRun.controlPointRunManpowerList.push(controlPointRunManpower);
        $scope.manpowerType = {};
        $scope.manpowerQuantity = '';
    };

    $scope.addControlPointRunLoss = function () {
        if ($scope.controlPointRun.controlPointRunLossList == undefined) {
            $scope.controlPointRun.controlPointRunLossList = [];
        }

        var controlPointRunLoss = {lossType: $scope.lossType, lossReason: $scope.lossReason, quantity: $scope.lossQuantity};
        $scope.controlPointRun.controlPointRunLossList.push(controlPointRunLoss);
        $scope.lossReason = {};
    };
    $scope.addControlPointRunJob = function () {
        if ($scope.controlPointRun.controlPointRunJobList == undefined) {
            $scope.controlPointRun.controlPointRunJobList = [];
        }
        var controlPointRunJob = {job: $scope.job, jobType: $scope.jobType, operation: $scope.operation, quantity: $scope.jobQuantity};
        $scope.controlPointRun.controlPointRunJobList.push(controlPointRunJob);
        $scope.job = {};
        $scope.jobType = {};
        $scope.operation = {};
        $scope.jobQuantity = '';
    };
    $scope.addControlPointRunBreakdown = function () {
        if ($scope.controlPointRun.controlPointRunBreakdownList == undefined) {
            $scope.controlPointRun.controlPointRunBreakdownList = [];
        }
        var controlPointRunBreakdown = {breakdownNumber: $scope.breakdownNo, machine: $scope.machine, duration: $scope.duration, reason: $scope.reason};
        $scope.controlPointRun.controlPointRunBreakdownList.push(controlPointRunBreakdown);
        $scope.machine = {};
        $scope.breakdown = '';
        $scope.reason = '';
        $scope.breakdownNo = '';
    };

    $scope.save = function () {

        $scope.controlPointRun.runDate = $('#runDate').val();
        controlPointRunService.save($scope.controlPointRun).then(
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
    $('#controlPointRunModal').on('show.bs.modal', function () {
        $scope.loadShifts();
        $scope.loadJobs();
        $scope.loadJobTypes();
        $scope.loadOperations();
        $scope.loadControlPoints();
        $scope.loadMachines();
        $scope.loadLossTypes();
        $scope.loadLossReasons();
        $scope.loadManpowerTypes();
        $scope.saveButtonText = 'Save';
        if (controlPointRunService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.controlPointRun = controlPointRunService.toEdit;
                $('#runDatetimepicker').val($scope.controlPointRun.runDate);
            }, 500);

        }
    })
});