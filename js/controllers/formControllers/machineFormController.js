
app.controller('machineFormController', function ($scope, $cookies, accountService, appService, machineService) {
    $scope.code = '';
    $scope.name = '';
    $scope.wcc = '';
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
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '' || $scope.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        machineService.save($scope.code, $scope.name, $scope.wcc).then(
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
 $('#machineModal').on('shown.bs.modal', function () {
        $scope.loadWorkcenters();
    })

    }

});
