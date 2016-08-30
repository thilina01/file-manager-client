
app.controller('fileFormController', function ($scope, $http, $location,$log, folderService) {

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
            alert('Form not complete!');
            return;
        }
        if ($scope.aFile == '') {
            alert('No file to upload!');
            return;
        }

        var formdata = new FormData();
        data = {
            name: $scope.name,
            description: $scope.description,
            folders: [{id: folderService.getId()}]
        }
        formdata.append("data", angular.toJson(data));
        formdata.append("file", $scope.aFile);

        $http.post($scope.baseURL+"/files/upload", formdata, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined//'multipart/form-data ; boundary=HereGoes; Content-Transfer-Encoding'
            }
        }).then(function (response) {
            $scope.name = '';
            $scope.description = '';
            $scope.load();
            $location.path("/folder");
            alert(response);
            return response;
        });
    };
});
