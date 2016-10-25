
app.controller('incotermFormController', function ($scope,$timeout, $cookies, accountService, appService, incotermService) {
    $scope.incoterm = {};
    $scope.saveButtonText = 'Save';
   
    $scope.clear = function () {
        $scope.incoterm = {};
         incotermService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        incotermService.save($scope.incoterm).then(
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
    $('#incotermModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (incotermService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.incoterm = incotermService.toEdit;
            }, 500);
        }
    })
});
