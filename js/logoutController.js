
app.controller('logoutController', function ($scope, $rootScope) {
    $scope.logout = function () {
        $rootScope.isUser = false;
    }
});