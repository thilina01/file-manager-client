
app.controller('registerFormController', function ($scope, accountService, appService) {
    $scope.email = '';
    $scope.password = '';
    $scope.passwordAgain = '';

    $scope.register = function () {
        accountService.register($scope.email, $scope.password, $scope.passwordAgain).then(function (response) {

            if (response.data) {
                appService.setEmail($scope.email);
                $scope.email = '';
                $scope.password = '';
                $scope.passwordAgain = '';
                $scope.reloadApp();
                return response;
            }

        });
    }
});
