app.controller('machineGridController', function ($http, $scope, $cookies, machineService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            machineService.toEdit = $scope.dataTable.row('.selected').data();
            $('#machineGridModal').modal('hide');
            $('#machineModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            machineService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.machines = '';
    $scope.table = $('#machineTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'machineNo'},
            {data: 'machineName'},
            {data: 'wcc'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadMachines = function () {
        $scope.dataTable.clear();
        machineService.getAll().then(function (response) {
            $scope.machines = response.data;
            $scope.dataTable.rows.add($scope.machines).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#machineGridModal').on('show.bs.modal', function () {
        $scope.loadMachines();
    })
    $('#machineGridModal').on('hidden.bs.modal', function () {

    })

});
