
app.controller('incotermGridController', function ($http, $scope, $cookies, incotermService, appService) {

    $scope.incoterms = '';

    $scope.loadIncoterms = function () {
        incotermService.getAll().then(function (response) {
            $scope.incoterms = response.data;

            var x = $('#incotermTable').DataTable({
                data: $scope.incoterms,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#incotermGridModal').on('shown.bs.modal', function () {
        $scope.loadIncoterms();
    })
    $('#incotermGridModal').on('hidden.bs.modal', function () {
        $('#incotermTable').DataTable().destroy();
    })
});