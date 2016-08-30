
app.controller('appController', function ($scope, $timeout) {
    //$scope.user = $cookies.get('myCookie');
    $scope.errorMessage = '';
    $scope.folderId = 0;
    $scope.baseURL = 'http://localhost:8080';
    $scope.title = 'File Manager';
    $scope.organization = 'TRW Lanka (Pvt) Ltd.';
    $scope.showError = function ($message) {
        $scope.errorMessage = $message;
        $timeout(function () {
            $scope.errorMessage = '';
        }, 10000);
        //alert($message)
    }
});
