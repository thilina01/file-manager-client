
app.controller('folderFormController', function ($scope, $log, folderService) {
    $scope.name = '';
    $scope.description = '';

    $scope.createFolder = function () {
        //alert(folderService.getId());
        if ($scope.name == '' || $scope.description == '') {
            $scope.showError('Both Name and Description Required!');
            return;
        }
        var data = {
            name: $scope.name,
            description: $scope.description
        }
        if (folderService.getId() != 0) {
            data = {
                name: $scope.name,
                description: $scope.description,
                folder: {id: folderService.getId()}
            }
        }
        folderService.createFolder(data).then(function (response) {
            $scope.name = '';
            $scope.description = '';
            $scope.load(); // this call is important to refresh folder list in
            // index page
            return response;
        }, function (response) {
            $scope.showError(response.data.message);
            $log.info(response);
            return response;
        });
    }
});
