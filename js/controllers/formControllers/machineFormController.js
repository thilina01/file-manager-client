
app.controller('machineFormController', function ($scope, $timeout, $cookies, accountService, appService, workCenterService, machineService) {
    $scope.machine = {};

    $scope.workCenters = [];
    $scope.saveButtonText = 'Save';

    $scope.loadWorkcenters = function () {
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;
        });
    }

    $scope.clear = function () {
        $scope.machine = {};
        $scope.workCenters = [];
        machineService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.machine.code == '' || $scope.machine.name == '' || angular.equals($scope.machine.workCenter, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        machineService.save($scope.machine).then(
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

    $('#machineModal').on('show.bs.modal', function () {
        $scope.loadWorkcenters();
        $scope.saveButtonText = 'Save';
        if (machineService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.machine = machineService.toEdit;
            }, 500);
        }
    })
});
