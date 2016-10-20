
app.controller('controlPointFormController', function ($scope, $cookies, accountService, appService, controlPointService, workCenterService) {

    $scope.controlPoint = {};
    $scope.workCenter = {};
    $scope.workCenters = [];
    $scope.costCenter = '';

    $scope.loadWorkcenters = function () {
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;
        });
    }


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.controlPoint = {};
        $scope.workCenter = {};
    }
    $scope.isValid = function () {
        if ($scope.controlPoint.code == '' || $scope.controlPoint.name == '' || $scope.controlPoint.section == '' || angular.equals($scope.workCenter, {})) {
            return false;
        }
        return true;
    }

    $scope.test = function () {        
        $scope.costCenter = JSON.parse($scope.workCenter).costCenter;
        
    }
    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.controlPoint.workCenter = JSON.parse($scope.workCenter);

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

    $('#controlPointModal').on('shown.bs.modal', function () {
        $scope.loadWorkcenters();
    })

});