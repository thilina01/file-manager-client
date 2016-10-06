
app.controller('logoutController', function ($scope, $rootScope, $cookies, accountService) {
    $scope.logout = function () {
        $cookies.get("email");
        accountService.logout($cookies.get("email")).then(function (response) {
            $cookies.remove("email");
            //alert('logout Success');
            $scope.reloadApp();
        });
    }
});