
app.controller('costCenterGridController', function ($http, $scope, $cookies, costCenterService, appService) {

    $scope.costCenters = '';

    $scope.loadcostCenters = function () {
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;

            var x = $('#costCenterTable').DataTable({
                data: $scope.costCenters,
                columns: [
                    {data: 'code'},
                    {data: 'name'},
                    {data: 'section.name'}
                ]
            });
        });
    }

    $('#costCenterGridModal').on('shown.bs.modal', function () {
        $scope.loadcostCenters();
    })
    $('#costCenterGridModal').on('hidden.bs.modal', function () {
        $('#costCenterTable').DataTable().destroy();
    })
});