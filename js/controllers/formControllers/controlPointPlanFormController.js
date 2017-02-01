
app.controller('controlPointPlanFormController', function ($scope, $timeout, controlPointPlanService, jobTypeService, controlPointService, shiftService, jobService, manpowerTypeService) {
    //main
    $scope.controlPointPlan = {};
    $scope.controlPoints = [];
    $scope.shifts = [];
    $scope.jobs = [];
    $scope.jobTypes = [];
    $scope.lossTypes = [];
    $scope.lossReasons = [];
    $scope.manpowerTypes = [];

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

    $scope.loadManpowerTypes = function () {
        manpowerTypeService.getAll().then(function (response) {
            $scope.manpowerTypes = response.data;
        });
    }

    $scope.productionClear = function () {
        $scope.productionJobNo = '';
        $scope.productionQuantity = '';
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
        $scope.controlPointPlan = {};
    }

    $scope.addControlPointPlanManpower = function () {
        if ($scope.controlPointPlan.controlPointPlanManpowerList == undefined) {
            $scope.controlPointPlan.controlPointPlanManpowerList = [];
        }
        var controlPointPlanManpower = {manpowerType: $scope.manpowerType, count: $scope.manpowerQuantity};
        $scope.controlPointPlan.controlPointPlanManpowerList.push(controlPointPlanManpower);
        $scope.manpowerType = {};
        $scope.manpowerQuantity = '';
    };

    $scope.addControlPointPlanJob = function () {
        if ($scope.controlPointPlan.controlPointPlanJobList == undefined) {
            $scope.controlPointPlan.controlPointPlanJobList = [];
        }
        var controlPointPlanJob = {job: $scope.job, jobType: $scope.jobType, quantity: $scope.jobQuantity};
        $scope.controlPointPlan.controlPointPlanJobList.push(controlPointPlanJob);
        $scope.job = {};
        $scope.jobType = {};
        $scope.jobQuantity = '';
    };

    $scope.save = function () {
        $scope.controlPointPlan.planDate = $('#planDate').val();
        controlPointPlanService.save($scope.controlPointPlan).then(
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

    $('#controlPointPlanModal').on('show.bs.modal', function () {
        $scope.loadShifts();
        $scope.loadJobs();
        $scope.loadJobTypes();
        $scope.loadControlPoints();
        $scope.loadManpowerTypes();
        $scope.saveButtonText = 'Save';
        if (controlPointPlanService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.controlPointPlan = controlPointPlanService.toEdit;
                $('#runDatetimepicker').val($scope.controlPointPlan.runDate);
            }, 500);
        }
    })
});