
app.controller('paintGridController', function ($http, $scope, $cookies, paintService, appService) {

    $scope.paints = '';

    $scope.loadPaints = function () {
        paintService.getAll().then(function (response) {
            $scope.paints = response.data;

            var x = $('#paintTable').DataTable({
                data: $scope.paints,
                columns: [
                    {data: 'code'},
                    {data: 'description'},
                   
                ]
            });
        });
    }

    $('#paintGridModal').on('shown.bs.modal', function () {
        $scope.loadPaints();
    })
    $('#paintGridModal').on('hidden.bs.modal', function () {
        $('#paintTable').DataTable().destroy();
    })
});