
app.controller('deleteFileController', function ($scope, $rootScope, $http, fileService) {
    $scope.deleteFile = function () {
        fileService.deleteFile($rootScope.fileToDelete.id).then(function (response) {
            $scope.load();
        });
    }
    $scope.cancel = function () {
        $rootScope.fileToDelete = '';
    }
});