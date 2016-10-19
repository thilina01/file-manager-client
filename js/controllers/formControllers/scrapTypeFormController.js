
app.controller('scrapTypeFormController', function ($scope, $cookies, accountService, scrapTypeService, appService) {
    $scope.code = '';
    $scope.type = '';
    $scope.typeInShinhala = '';



    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.type = '';
        $scope.typeInShinhala = '';
    }
    $scope.isValid = function () {
        if ($scope.code == '' || $scope.type == '' || $scope.typeInShinhala == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        scrapTypeService.save($scope.code, $scope.type, $scope.typeInShinhala).then(
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