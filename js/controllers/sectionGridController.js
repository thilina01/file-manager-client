
app.controller('sectionGridController', function ($http, $scope, $cookies, sectionService, appService) {

    $scope.sections = '';
    $scope.loadSections = function () {
        sectionService.getAll().then(function (response) {
            $scope.sections = response.data;

            /*
             var result = [];
             for (var i in $scope.sections)
             result.push([$scope.sections [i].code, $scope.sections [i].name]);
             alert(result);*/

            var x = $('#sectionTable').DataTable({
                data: $scope.sections,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#sectionGridModal').on('shown.bs.modal', function () {
        $scope.loadSections();
    })
    $('#sectionGridModal').on('hidden.bs.modal', function () {
        $('#sectionTable').DataTable().destroy();
    })
});