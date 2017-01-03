app.controller('teamFormController', function ($scope, $timeout, $cookies, accountService, appService, teamService) {
    $scope.team = {};
    $scope.saveButtonText = 'Save';

    $scope.clear = function () {
        $scope.team = {};
        teamService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.team.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        teamService.save($scope.team).then(
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

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }

    $('#teamModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (teamService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.team = teamService.toEdit;
            }, 500);
        }
    })
});
