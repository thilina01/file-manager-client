
app.controller('sectionFormController', function ($scope, $cookies, sectionService, appService) {
    $scope.code = '';
    $scope.name = '';
    
    $scope.clear = function () {
        alert($scope.code+' '+$scope.name);
        $scope.code = '';
        $scope.name = '';
    }
    
    $scope.save = function () {
        
        sectionService.save($scope.code, $scope.name).then(function (response) {
            if (response.data) {
                alert(response.data);
            }
            $scope.reloadApp();
            return response;
        });
    }
    
});