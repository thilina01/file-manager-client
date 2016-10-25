app.controller('controlPointFormController', function ($scope, $timeout, $cookies, accountService, appService, controlPointService, workCenterService) {
    $scope.JSON = JSON;
    $scope.controlPoint = {};
    $scope.workCenters = [];
    $scope.saveButtonText = 'Save';

    $scope.loadWorkcenters = function () {
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;
        });
    }


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.controlPoint = {};
        controlPointService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.controlPoint.code == '' || $scope.controlPoint.name == '' || $scope.controlPoint.section == '' || angular.equals($scope.controlPoint.workCenter, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.controlPoint.workCenter = JSON.parse($scope.controlPoint.workCenter);

        controlPointService.save($scope.controlPoint).then(
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

    $('#controlPointModal').on('show.bs.modal', function () {
        $scope.loadWorkcenters();
        $scope.saveButtonText = 'Save';
        if (controlPointService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.controlPoint = controlPointService.toEdit;
            }, 500);
        }
    })

});