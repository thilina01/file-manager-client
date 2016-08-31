
app.controller('appController', function ($scope, $timeout, $rootScope, $cookies) {

    $scope.baseURL = 'http://localhost:8080';
    $scope.organization = 'TRW Lanka (Pvt) Ltd.';
    $scope.appName = 'Document Management System';
    $scope.title = $scope.appName;
    $rootScope.isUser = $cookies.get('isUser');
    $scope.errorMessage = '';
    $scope.folderId = 0;

    $scope.showError = function ($message) {
        $scope.errorMessage = $message;
        $timeout(function () {
            $scope.errorMessage = '';
        }, 10000);
    }
});
