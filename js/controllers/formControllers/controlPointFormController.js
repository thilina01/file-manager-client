
app.controller('controlPointFormController', function ($scope, $cookies, accountService, appService, controlPointService, workCenterService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
    $scope.section = '';
    $scope.workCenters = '';

    $scope.loadWorkcenters = function () {
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;
        });
    }


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
        $scope.wcc = '';
        $scope.section = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '' || $scope.wcc == '' || $scope.section == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        controlPointService.save($scope.code, $scope.name, $scope.wcc, $scope.section).then(
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

    $('#controlPointModal').on('shown.bs.modal', function () {
        $scope.loadWorkcenters();
    })

});