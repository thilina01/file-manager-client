
app.controller('deleteFileController', function ($scope, $rootScope, $http, $log) {
    $scope.deleteFile = function () {
        $http.delete($scope.baseURL+"/files/" + $rootScope.fileToDelete.id).
                then(function (response) {
                    $scope.load();
                });
    }
    $scope.cancel = function () {
        $rootScope.fileToDelete = '';
    }
});