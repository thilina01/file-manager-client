
app.controller('dmsHomeController', function ($scope, $location, folderService) {
    $scope.folders = "";
    $scope.load = function () {
        $scope.errorMessage = '';
        folderService.getTopLevelFolders().then(function (response) {
            $scope.folders = response.data;
        });
    }
    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        $location.path("/folder");
    }
});
