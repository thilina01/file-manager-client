
app.controller('defectTypeFormController', function ($scope, $cookies, accountService, appService, defectTypeService) {
    $scope.defectType = {};
  
    $scope.clear = function () {
         $scope.defectType= {};
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.type == '' || $scope.typeInSinhala == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        defectTypeService.save($scope.defectType).then(
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
});