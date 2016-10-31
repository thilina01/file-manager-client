
app.controller('planningFormController', function ($scope, $cookies, accountService, controlPointService, jobService, appService, planningService,shiftService) {
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

    $scope.controlPoints = '';
    $scope.jobs = '';
    $scope.shifts = '';

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
    $scope.loadShifts = function () {
        shiftService.getAll().then(function (response) {
            $scope.shifts = response.data;
        });
    }

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

    $('#planningModal').on('show.bs.modal', function () {
        $scope.loadControlPoints();
        $scope.loadJobs();
        $scope.loadShifts();
    })

});
