
app.controller('costCenterFormController', function ($scope, $cookies, accountService, appService, costCenterService, sectionService) {

    $scope.costCenter = {};
    $scope.section = {};
    $scope.sections = [];

    $scope.loadSections = function () {
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;
        })
    }

    $scope.clear = function () {
        $scope.costCenter = {};
        $scope.section = {};
    }
    $scope.isValid = function () {
        if ($scope.costCenter.code == '' || $scope.costCenter.name == '' || angular.equals($scope.section, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.costCenter.section = JSON.parse($scope.section);
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
    $('#costCenterModal').on('shown.bs.modal', function () {
        $scope.loadSections();
    })
});
