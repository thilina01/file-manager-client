
app.controller('energyFormController', function ($scope, $cookies, accountService, appService, energyService, shiftService, jobService, machineService) {
    $scope.energy = {};
    $scope.job = {};
    $scope.machine = {};
    $scope.energies = [];
    $scope.jobs = [];
    $scope.machineNo = [];
    $scope.saveButtonText = 'Save';
    $scope.loadShifts = function () {
        shiftService.getAll().then(function (response) {
            $scope.shifts = response.data;
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
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.energy = {};
        $scope.job = {};
        $scope.machine = {};
    }
    $scope.isValid = function () {
        if ($scope.energy.energyDate == '' || angular.equals($scope.energy.shift, {}) || angular.equals($scope.energy.jobNo, {}) || angular.equals($scope.energy.machineNo, {}) || $scope.energy.consumptionRate == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        energyService.save($scope.energy).then(
                function (response) {
                    if (response.data) {
                        $scope.showSuccess("saved");
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

                    $scope.showError("Unable to save");
                    return response;
                }
        );

    }
    $('#energyModal').on('show.bs.modal', function () {
        $scope.loadShifts();
        $scope.loadJobs();
        $scope.loadMachines();
        $scope.saveButtonText = 'Save';
        if (energyService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.controlPoint = energyService.toEdit;
            }, 500);
        }
    })
});