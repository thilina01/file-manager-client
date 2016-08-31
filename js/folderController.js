
app.controller('folderController', function ($scope, $http, $location, $window, $rootScope, folderService) {
    if (folderService.getId() == 0) {
        $location.path("/");
    }
    $scope.folder = '';
    $scope.parents = [];
    $scope.bytes = '';
    $scope.load = function () {
        $http.get($scope.baseURL + '/folders/' + folderService.getId() + '/with-sub-folders-and-files').then(function (response) {
            $scope.folder = response.data;
        });
    }

    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        $http.get($scope.baseURL + '/folders/' + folderService.getId() + '/with-sub-folders-and-files').then(function (response) {
            $scope.folder = response.data;
        });
        $http.get($scope.baseURL + '/folders/' + folderService.getId() + '/with-parent').then(function (response) {
            $scope.parents = [];
            pushParent(response.data);
        });
    }

    $scope.getFile = function ($fileId) {
        $window.open($scope.baseURL + '/files/' + $fileId + '/download', '_blank');
    }
    $scope.setFileToDelete = function ($file) {
        $rootScope.fileToDelete = $file;
    }

    function pushParent($parent) {
        if ($parent.folder == null) {
            $scope.parents = $scope.parents.reverse();
            return;
        } else {
            $scope.parents.push($parent.folder);
            pushParent($parent.folder);
        }
    }
});