
app.controller('paintFormController', function ($scope, $cookies, accountService, appService, paintService) {

    $scope.paint = {};
  
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.paint = {};
    }
    $scope.isValid = function () {
        if ($scope. $scope.paint.code == '' || $scope.paint.description == '' ) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
       

        paintService.save($scope.paint).then(
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