
app.controller('workCenterGridController', function ($http, $scope, $cookies, workCenterService, appService) {

    $scope.workCenters = '';

    $scope.loadworkCenters = function () {
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;

            var x = $('#workCenterTable').DataTable({
                data: $scope.workCenters,
                columns: [
                    {data: 'code'},
                    {data: 'name'},
                    {data: 'costCenter.name'}
                ]
            });
        });
    }

    $('#workCenterGridModal').on('show.bs.modal', function () {
        $scope.loadworkCenters();
    })
    $('#workCenterGridModal').on('hidden.bs.modal', function () {
        $('#workCenterTable').DataTable().destroy();
    })
});