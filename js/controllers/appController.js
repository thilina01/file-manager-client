
app.controller('appController', function ($scope, $timeout, $rootScope, $location, appService, menuService) {

    $scope.baseURL = appService.baseURL;
    $scope.clientBaseURL = appService.clientBaseURL;
    $scope.organization = appService.organization;
    $scope.appName = appService.appName;
    $scope.title = $scope.appName;
    $scope.errorMessage = '';
    $scope.successMessage = '';
    $scope.folderId = 0;

    document.title = $scope.appName;

    $rootScope.menus = [];

    $scope.showError = function ($message) {
        $scope.errorMessage = $message;
        $timeout(function () {
            $scope.errorMessage = '';
        }, 10000);
    }
    $scope.showSuccess = function ($message) {
        $scope.successMessage = $message;
        $timeout(function () {
            $scope.successMessage = '';
        }, 10000);
    }
    $scope.goHome = function () {
        $location.path("/");
    }
    $scope.reloadApp = function () {
        menuService.getTopMenus().then(function (response) {
            $scope.menus = response.data;
        }, function (response) {
            $scope.menus = [];
        });
    }
    window.onload = function () {
        $('#loadingDiv').hide();
        //alert('Boooo');
    }

}
);
