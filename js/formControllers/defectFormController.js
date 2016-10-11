
app.controller('defectFormController', function ($scope, $cookies, accountService, appService, defectService) {
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
        defectService.save($scope.code, $scope.type, $scope.typeInShinhala).then(
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
});