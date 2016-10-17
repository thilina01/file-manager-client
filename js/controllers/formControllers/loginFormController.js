
app.controller('loginFormController', function ($scope, $cookies, accountService, appService) {

    $scope.login = function () {
        accountService.login($scope.email, $scope.password).then(function (response) {
            if (response.data) {
                ////alert(response.data);
                appService.setEmail($scope.email);
                $scope.email = '';
                $scope.password = '';
            }
            $scope.reloadApp();
            return response;
        });
    }
});