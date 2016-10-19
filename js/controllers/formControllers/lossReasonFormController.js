
app.controller('lossReasonFormController', function ($scope, $cookies, accountService, appService, lossReasonService) {
    $scope.code = '';
    $scope.type = '';
    $scope.typeInShinhala = '';

    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.code = '';
        $scope.type = '';
        $scope.typeInShinhala = '';
    }

    $scope.save = function () {
        lossReasonService.save($scope.code, $scope.type, $scope.typeInShinhala).then(
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
