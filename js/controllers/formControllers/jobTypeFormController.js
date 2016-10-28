
app.controller('jobTypeFormController', function ($scope,$timeout, $cookies, accountService, appService, jobTypeService) {
    $scope.jobType = {};
    $scope.saveButtonText = 'Save';
    $scope.clear = function () {
        $scope.jobType = {};
        jobTypeService.toEdit = {};
        $scope.saveButtonText = 'Save';

    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.type == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        jobTypeService.save($scope.jobType).then(
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
     $('#jobTypeModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (jobTypeService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.jobType = jobTypeService.toEdit;
            }, 500);
        }
    })
});