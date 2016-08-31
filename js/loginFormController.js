
app.controller('loginFormController', function ($scope, $http, $rootScope,$cookies) {
    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {
        $http.post($scope.baseURL + "/accounts/login", {
            email: $scope.email,
            password: $scope.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
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
