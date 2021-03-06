
app.controller('homeController', function ($scope, $location, folderService) {
    $scope.folders = "";
    $scope.load = function () {
        $scope.errorMessage = '';
        folderService.getTopLevelFolders().then(function (response) {
            $scope.folders = response.data;
        });
    }
});
