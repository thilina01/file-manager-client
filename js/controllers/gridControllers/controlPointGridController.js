
app.controller('controlPointGridController', function ($http, $scope, $cookies, controlPointService, appService) {

    $scope.controlPoints = '';

    $scope.loadSections = function () {
        controlPointService.getAll().then(function (response) {
            $scope.controlPoints = response.data;

            var x = $('#controlPointTable').DataTable({
                data: $scope.controlPoints,
                columns: [
                    {data: 'code'},
                    {data: 'name'},
                    {data: 'wcc'},
                    {data: 'section'}
                ]
            });
        });
    }

    $('#controlPointGridModal').on('shown.bs.modal', function () {
        $scope.loadcontrolPoints();
    })
    $('#controlPointGridModal').on('hidden.bs.modal', function () {
        $('#controlPointTable').DataTable().destroy();
    })
});