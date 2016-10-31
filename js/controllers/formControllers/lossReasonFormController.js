
app.controller('lossReasonFormController', function ($scope, $timeout, $cookies, accountService, appService, lossReasonService,lossTypeService) {
    $scope.lossReason = {};
    $scope.lossTypes = [];
    $scope.saveButtonText = 'Save';

    $scope.loadLossTypes = function () {
        lossTypeService.getAll().then(function (response) {
            $scope.lossTypes = response.data;
        });
    }

    $scope.clear = function () {
        $scope.lossReason = {};
        lossReasonService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.lossReason.code == '' || $scope.lossReason.reason == '' || $scope.controlPoint.typeInShinhala == '' || angular.equals($scope.lossReason.lossType, {})) {
            return false;
        }
        return true;
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
        $scope.loadLossTypes();
        $scope.saveButtonText = 'Save';
        if (lossReasonService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.lossReason = lossReasonService.toEdit;
            }, 500);
        }
    })
});
