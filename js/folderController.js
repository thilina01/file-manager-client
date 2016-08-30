
app.controller('folderController', function ($scope, $http, $location, $window, $rootScope, folderService) {
    if (folderService.getId() == 0) {
        $location.path("/");
    }
    $scope.folder = '';
    $scope.parents = [];
    $scope.bytes = '';
    //alert(folderService.getId());
    $scope.load = function () {
        //$scope.errorMessage = '';
        $http.get($scope.baseURL + '/folders/' + folderService.getId() + '/with-sub-folders-and-files').then(function (response) {
            $scope.folder = response.data;
            //alert($scope.folder.name);
        });
    }

    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        //$scope.folderId = $folderId;
        //alert(folderService.getId());
        $http.get($scope.baseURL + '/folders/' + folderService.getId() + '/with-sub-folders-and-files').then(function (response) {
            $scope.folder = response.data;
            //alert($scope.folder.name);
        });
        $http.get($scope.baseURL + '/folders/' + folderService.getId() + '/with-parent').then(function (response) {
            //$scope.parent = response.data;
            $scope.parents = [];
            pushParent(response.data);
            //alert(angular.toJson($scope.parent));
            //alert(angular.toJson($scope.parents));
        });
        //$location.path("/folder");
    }

    $scope.getFile = function ($fileId) {
        $window.open($scope.baseURL + '/files/' + $fileId + '/download', '_blank');
        /*
         alert($fileId);
         $http.get('http://localhost:8080/files/' + $fileId + '/download').then(function (response) {
         //$scope.bytes = response.data.bytes;
         });*/
    }
    $scope.setFileToDelete = function ($file) {
        $rootScope.fileToDelete = $file;
    }


    function pushParent($parent) {
        // some code here for all parents
        if ($parent.folder == null) {
            $scope.parents = $scope.parents.reverse();
            return;
        } else {
            $scope.parents.push($parent.folder);
            pushParent($parent.folder);

            //alert($parent.folder.name);
        }
    }
});