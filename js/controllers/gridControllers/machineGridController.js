
app.controller('machineGridController', function ($http, $scope, $cookies, machineService, appService) {

    $scope.machines = '';

    $scope.loadmachines = function () {
        machineService.getAll().then(function (response) {
            $scope.machines = response.data;

            var x = $('#machineTable').DataTable({
                data: $scope.machines,
                columns: [
                    {data: 'machineNo'},
                    {data: 'machineName'},
                    {data: 'wcc'}
                ]
            });
        });
    }

    $('#machineGridModal').on('shown.bs.modal', function () {
        $scope.loadmachins();
    })
    $('#machineGridModal').on('hidden.bs.modal', function () {
        $('#machineTable').DataTable().destroy();
    })
});