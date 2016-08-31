
app.controller('loginFormController', function ($scope, $rootScope, $cookies, accountService) {

    $scope.login = function () {
        accountService.login($scope.email, $scope.password).then(function (response) {
            $scope.email = '';
            $scope.password = '';
            if (response.data) {
                $rootScope.isUser = true;
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 1);
                // Setting a cookie
                $cookies.put('isUser', response.data, {
                    'expires': expireDate
                });
            }
            return response;
        });
    }
});
