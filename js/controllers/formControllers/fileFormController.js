
app.controller('fileFormController', function ($scope, $location, folderService, fileService) {

    $scope.fileName = '';
    $scope.name = '';
    $scope.description = '';
    $scope.aFile = '';

    $scope.setFile = function ($file) {
        $scope.aFile = $file;
        $scope.fileName = $file.name;
        //$log.info($file);
        //alert($scope.aFile);
    }
    $scope.uploadFile = function () {

        if ($scope.name == '' || $scope.description == '') {
            $scope.showError('Form not complete!');
            return;
        }
        if ($scope.aFile == '') {
            $scope.showError('No file to upload!');
            return;
        }

        var formdata = new FormData();
        data = {
            name: $scope.name,
            description: $scope.description,
            folderList: [{id: folderService.getId()}]
        }
        formdata.append("data", angular.toJson(data));
        formdata.append("file", $scope.aFile);

        fileService.uploadFile(formdata).then(function (response) {
            $scope.name = '';
            $scope.description = '';
            $scope.load();
            $location.path("/folder");
            return response;
        }, function (response) {
            $scope.showError(response.data.message);
            return response;
        });
    };
});
