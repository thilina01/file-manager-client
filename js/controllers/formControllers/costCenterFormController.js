
app.controller('costCenterFormController', function ($scope, $timeout, $cookies, accountService, appService, costCenterService, sectionService) {

    $scope.costCenter = {};
    $scope.sections = [];
    $scope.saveButtonText = 'Save';

    $scope.loadSections = function () {
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;
        })
    }

    $scope.clear = function () {
        $scope.costCenter = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.costCenter.code == '' || $scope.costCenter.name == '' || angular.equals($scope.costCenter.section, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        costCenterService.save($scope.costCenter).then(
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
                    }
                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }
    $('#costCenterModal').on('show.bs.modal', function () {
        $scope.loadSections();
        $scope.saveButtonText = 'Save';
        if (costCenterService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.costCenter = costCenterService.toEdit;
            }, 500);
        }
    })
});
