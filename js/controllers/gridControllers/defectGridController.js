
app.controller('defectGridController', function ($http, $scope, $cookies, defectService, appService) {

    $scope.defects = '';

    $scope.loaddefects = function () {
        defectService.getAll().then(function (response) {
            $scope.defects = response.data;

            var x = $('#defectTable').DataTable({
                data: $scope.defects,
                columns: [
                    {data: 'code'},
                    {data: 'type'},
                    {data: 'typeInShinhala'}
                ]
            });
        });
    }

    $('#defectGridModal').on('shown.bs.modal', function () {
        $scope.loaddefects();
    })
    $('#defectGridModal').on('hidden.bs.modal', function () {
        $('#defectTable').DataTable().destroy();
    })
});