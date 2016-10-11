
app.controller('appController', function ($scope, $timeout, $rootScope, $location, appService, menuService) {

    $scope.baseURL = appService.baseURL;
    $scope.clientBaseURL = appService.clientBaseURL;
    $scope.organization = appService.organization;
    $scope.appName = appService.appName;

    $scope.title = $scope.appName;
    $scope.errorMessage = '';
    $scope.folderId = 0;

    $rootScope.menus = [];

    $scope.showError = function ($message) {
        $scope.errorMessage = $message;
        $timeout(function () {
            $scope.errorMessage = '';
        }, 10000);
    }
    $scope.goHome = function () {
        $location.path("/");
    }
    $scope.reloadApp = function () {
        menuService.getMenus().then(function (response) {
            $scope.menus = response.data;
        }, function (response) {
            $scope.menus = [];
        });
    }

}
);