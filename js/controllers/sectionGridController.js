
app.controller('sectionGridController', function ($http, $scope, $cookies, sectionService, appService) {

    $scope.sections = '';

    $scope.loadSections = function () {
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;
        });
    }
});