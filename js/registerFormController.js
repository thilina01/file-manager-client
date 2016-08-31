
app.controller('registerFormController', function ($scope, $rootScope, $cookies, accountService) {
    $scope.email = '';
    $scope.password = '';
    $scope.passwordAgain = '';

    $scope.register = function () {
        accountService.register($scope.email, $scope.password, $scope.passwordAgain).then(function (response) {

            if (response.data) {
                $rootScope.isUser = true;
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 1);
                $cookies.put('isUser', response.data, {
                    'expires': expireDate
                });
            }
            
            $scope.email = '';
            $scope.password = '';
            $scope.passwordAgain = '';
            return response;
        });
    }
});
