
app.controller('logoutController', function ($scope) {
    $scope.logout = function () {
        $scope.user = $cookies.get('myCookie');
    }
});