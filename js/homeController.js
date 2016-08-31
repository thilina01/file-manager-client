
app.controller('homeController', function ($scope, $http, $location, folderService) {
    $scope.folders = "";
    $scope.load = function () {
        $scope.errorMessage = '';
        $http.get($scope.baseURL+'/folders/top').then(function (response) {
            $scope.folders = response.data;
        });
    }
    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        $location.path("/folder");
    }
});
