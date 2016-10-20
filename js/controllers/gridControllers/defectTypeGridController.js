
app.controller('defectTypeGridController', function ($http, $scope, $cookies, defectTypeService, appService) {

    $scope.defectTypes = '';

    $scope.loaddefects = function () {
       defectTypeService.getAll().then(function (response) {
            $scope.defectTypes = response.data;

            var x = $('#defectTypeTable').DataTable({
                data: $scope.defectTypes,
                columns: [
                    {data: 'code'},
                    {data: 'type'},
                    {data: 'typeInSinhala'}
                ]
            });
        });
    }

    $('#defectTypeGridModal').on('shown.bs.modal', function () {
        $scope.loaddefectTypes();
    })
    $('#defectTypeGridModal').on('hidden.bs.modal', function () {
        $('#defectTypeTable').DataTable().destroy();
    })
});