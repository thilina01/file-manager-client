
app.controller('workCenterFormController', function ($scope, $cookies, costCenterService, appService, workCenterService) {
    $scope.code = '';
    $scope.name = '';
    $scope.section = '';
    $scope.costCenters = '';

    $scope.loadCostCenters = function () {
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;
        });
    }

    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.section = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '' || $scope.section == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }

        workCenterService.save($scope.code, $scope.name, $scope.section).then(
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
                        //alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
    $('#workCenterModal').on('shown.bs.modal', function () {
        $scope.loadCostCenters();
    })
});