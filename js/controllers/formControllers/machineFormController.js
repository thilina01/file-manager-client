
app.controller('machineFormController', function ($scope, $cookies, accountService, appService, workCenterService, machineService) {
    $scope.machine = {};
    $scope.workCenter = {};
    $scope.workCenters = [];

    $scope.loadWorkcenters = function () {
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;
        });
    }

    $scope.clear = function () {
        $scope.machine = {};
        $scope.workCenter = {};
        $scope.workCenters = [];
    }
    $scope.isValid = function () {
        if ($scope.machine.code == '' || $scope.machine.name == '' ||angular.equals($scope.workCenter, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }        
        $scope.machine.workCenter = JSON.parse($scope.workCenter);
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

    $('#machineModal').on('shown.bs.modal', function () {
        $scope.loadWorkcenters();
    })
});
