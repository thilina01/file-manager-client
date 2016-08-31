
app.controller('folderController', function ($scope, $location, $window, $rootScope, folderService) {
    if (folderService.getId() == 0) {
        $location.path("/");
    }
    $scope.folder = '';
    $scope.parents = [];
    $scope.bytes = '';
    $scope.load = function () {
        folderService.getFoldersWithSubFoldersAndFiles().then(function (response) {
            $scope.folder = response.data;
        });
    }

    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        folderService.getFoldersWithSubFoldersAndFiles().then(function (response) {
            $scope.folder = response.data;
        });
        folderService.getFoldersWithParent().then(function (response) {
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