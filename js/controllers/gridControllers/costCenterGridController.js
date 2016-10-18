
app.controller('costCenterGridController', function ($http, $scope, $cookies, costCenterService, appService) {

    $scope.costCenters = '';

    $scope.loadcosts = function () {
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;

            var x = $('#costTable').DataTable({
                data: $scope.costCenters,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#costGridModal').on('shown.bs.modal', function () {
        $scope.loadcosts();
    })
    $('#costGridModal').on('hidden.bs.modal', function () {
        $('#costTable').DataTable().destroy();
    })
});