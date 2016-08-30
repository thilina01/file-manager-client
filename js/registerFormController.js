
app.controller('registerFormController', function ($scope, $http) {
    $scope.email = '';
    $scope.password = '';
    $scope.passwordAgain = '';

    $scope.register = function () {
        $http.post($scope.baseURL+"/accounts/register", {
            email: $scope.email,
            password: $scope.password,
            passwordAgain: $scope.passwordAgain
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            $scope.email = '';
            $scope.password = '';
            $scope.passwordAgain = '';
            $scope.load(); // this call is important to refresh folder list in
            // index page
            return response;
        });
    }
});
