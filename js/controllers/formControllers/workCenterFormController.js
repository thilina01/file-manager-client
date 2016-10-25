
app.controller('workCenterFormController', function ($scope, $cookies, costCenterService, appService, workCenterService) {

    $scope.workCenter = {};
    $scope.costCenter = {};
    $scope.costCenters = [];
    $scope.saveButtonText = 'Save';

    $scope.loadCostCenters = function () {
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;
        });
    }

    $scope.clear = function () {
        $scope.workCenter = {};
        $scope.costCenter = {};
         workCenterService.toEdit = {};
        $scope.saveButtonText = 'Save';
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
                        $scope.showError(response.data.message);
                        return response;
                    }

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
    $('#workCenterModal').on('show.bs.modal', function () {
        $scope.loadCostCenters();
        $scope.saveButtonText = 'Save';
        if (workCenterService.toEdit.id != undefined) {
            $scope.saveButtonText = 'Update';
            $scope.workCenter =workCenterService.toEdit;
        }
    })
});