
app.controller('controlPointGridController', function ($http, $scope, $cookies, controlPointService, appService) {

    $scope.controlPoints = '';

    $scope.loadcontrolPoints = function () {
        controlPointService.getAll().then(function (response) {
            $scope.controlPoints = response.data;

            var x = $('#controlPointTable').DataTable({
                data: $scope.controlPoints,
                columns: [
                    {data: 'code'},
                    {data: 'name'},
                    {data: 'workCenter.code'},
                    {data: 'workCenter.costCenter.section.code'}
                ]
            });
        });
    }

    $('#controlPointGridModal').on('show.bs.modal', function () {
        $scope.loadcontrolPoints();
    })
    $('#controlPointGridModal').on('hidden.bs.modal', function () {
        $('#controlPointTable').DataTable().destroy();
    })
});