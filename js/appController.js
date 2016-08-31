
app.controller('appController', function ($scope, $timeout, $rootScope, $cookies, appService) {

    $scope.baseURL = appService.baseURL;
    $scope.organization = appService.organization;
    $scope.appName = appService.appName;
    
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
