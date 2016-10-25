
app.controller('lossReasonFormController', function ($scope, $cookies, accountService, appService, lossReasonService) {
    $scope.lossReason = {};
   

    $scope.clear = function () {
       $scope.lossReason = {};
    }

    $scope.save = function () {
        lossReasonService.save($scope.lossReason).then(
                function (response) {
                    if (response.data) {
                    }
                    $scope.showSuccess("saved");
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
