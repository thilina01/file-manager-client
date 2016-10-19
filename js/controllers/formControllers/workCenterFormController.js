
app.controller('workCenterFormController', function ($scope, $cookies, costCenterService, appService, workCenterService) {

    $scope.workCenter = {};
    $scope.costCenter = {};
    $scope.costCenters = [];

    $scope.loadCostCenters = function () {
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;
        });
    }

    $scope.clear = function () {
        $scope.workCenter = {};
        $scope.costCenter = {};
    }
    $scope.isValid = function () {
        if ($scope.workCenter.code == '' || $scope.workCenter.name == '' || angular.equals($scope.costCenter, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }

        $scope.workCenter.costCenter = JSON.parse($scope.costCenter);
        workCenterService.save($scope.workCenter).then(
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
                        //alert(response.data);
                    }

                    $scope.showError("Save faild");
                    return response;
                }
        );
    }
    $('#workCenterModal').on('shown.bs.modal', function () {
        $scope.loadCostCenters();
    })
});