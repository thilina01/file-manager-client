
app.controller('costCenterFormController', function ($scope, $cookies, accountService, appService, costCenterService, sectionService) {
    $scope.code = '';
    $scope.name = '';
    $scope.section = '';

    $scope.sections = '';

    $scope.loadSections = function () {
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;
        })
    }


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.name = '';
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
        costCenterService.save($scope.code, $scope.name, $scope.section).then(
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
                        alert(response.data);
                    }
                   
                    $scope.showError("Save faild");
                    return response;
                }
        );
    }
    $('#costCenterModal').on('shown.bs.modal', function () {
        $scope.loadSections();
    })
});
