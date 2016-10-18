
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
                        //alert(response.data);
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                       
                        $scope.showSuccess("saved");
                    }
                  
                    $scope.showError("Save faild");
                    return response;
                }
        );
    }
});
