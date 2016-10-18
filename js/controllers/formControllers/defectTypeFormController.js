
app.controller('defectTypeFormController', function ($scope, $cookies, accountService, appService, defectTypeService) {
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
        defectTypeService.save($scope.code, $scope.type, $scope.typeInShinhala).then(
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
                   
                    $scope.showError("Save faild");
                    return response;
                }
        );
    }
});