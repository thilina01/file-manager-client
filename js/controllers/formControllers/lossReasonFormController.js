
app.controller('lossReasonFormController', function ($scope, $timeout,$cookies, accountService, appService, lossReasonService) {
    $scope.lossReason = {};
    $scope.saveButtonText = 'Save';
   

    $scope.clear = function () {
       $scope.lossReason = {};
       lossReasonService.toEdit = {};
        $scope.saveButtonText = 'Save';
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
     $('#lossReasonModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (lossReasonService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.lossReason = lossReasonService.toEdit;
            }, 500);
        }
    })
});
