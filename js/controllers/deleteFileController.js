
app.controller('deleteFileController', function ($scope, $rootScope, fileService) {
    $scope.deleteFile = function () {
        fileService.deleteFile($rootScope.fileToDelete.id).then(function (response) {
            $scope.load();
        }, function (response) {
            $scope.showError(response.data.message);
            return response;
        });
    }
    $scope.cancel = function () {
        $rootScope.fileToDelete = '';
    }
});