
app.controller('loginFormController', function ($scope, $http, $cookies) {
    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {
        $http.post($scope.baseURL+"/accounts/login", {
            email: $scope.email,
            password: $scope.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            $scope.email = '';
            $scope.password = '';
            // $scope.load(); // this call is important to refresh folder list
            // in index page

            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            // Setting a cookie
            $cookies.put('myCookie', response.data, {
                'expires': expireDate
            });
            // Retrieving a cookie
            $scope.user = $cookies.get('myCookie');
            //alert(myCookie)

            alert($scope.user);
            return response;
        });
    }
});
