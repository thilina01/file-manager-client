app.controller('countryFormController', function ($scope, $timeout, $cookies, accountService, appService, countryService) {
    $scope.country = {};
    $scope.saveButtonText = 'Save';

    $scope.clear = function () {
        $scope.country = {};
        countryService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    $scope.isValid = function () {
        if ($scope.country.code == '' || $scope.country.name == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        countryService.save($scope.country).then(
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
                        //alert(response.data);
                    }

                    $scope.showError("Unable to save");
                    return response;
                }
        );
    }

    $('#countryModal').on('show.bs.modal', function () {
        $scope.saveButtonText = 'Save';
        if (countryService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.country = countryService.toEdit;
            }, 500);
        }
    })
});
