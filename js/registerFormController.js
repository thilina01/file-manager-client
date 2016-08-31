
app.controller('registerFormController', function ($scope, $http, $rootScope,$cookies) {
    $scope.email = '';
    $scope.password = '';
    $scope.passwordAgain = '';

    $scope.register = function () {
        $http.post($scope.baseURL + "/accounts/register", {
            email: $scope.email,
            password: $scope.password,
            passwordAgain: $scope.passwordAgain
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {

            if (response.data) {
                $rootScope.isUser = true;
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 1);
                // Setting a cookie
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
