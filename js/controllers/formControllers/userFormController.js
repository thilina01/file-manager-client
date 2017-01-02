
app.controller('userFormController', function ($scope, $timeout, teamService, statusService, userService) {
    $scope.user = {};

    $scope.teamList = [];
    $scope.statusList = [];
    $scope.saveButtonText = 'Save';

    $scope.loadTeamList = function () {
        teamService.getAll().then(function (response) {
            $scope.teamList = response.data;
        });
    }

    $scope.loadStatusList = function () {
        //$scope.statusList = [{name: 'active'}, {name: 'inactive'}];
        /* */statusService.getAll().then(function (response) {
            $scope.statusList = response.data;
        });
    }

    $scope.clear = function () {
        $scope.user = {};
        $scope.statusList = [];
        $scope.teamList = [];
        userService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.user.email == '' || angular.equals($scope.user.status, {}) || angular.equals($scope.user.team, {})) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        userService.save($scope.user).then(
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

    $('#userModal').on('show.bs.modal', function () {
        $scope.loadStatusList();
        $scope.loadTeamList();
        $scope.saveButtonText = 'Save';
        if (userService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.user = userService.toEdit;
            }, 500);
        }
    })
});
