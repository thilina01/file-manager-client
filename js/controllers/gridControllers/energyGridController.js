app.controller('energyGridController', function ($http, $scope, $cookies, energyService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            energyService.toEdit = $scope.dataTable.row('.selected').data();
            $('#energyGridModal').modal('hide');
            $('#energyModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            energyService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.energys = '';
    $scope.table = $('#energyTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'energyDate'},
            {data: 'shift'},
            {data: 'jobNo'},
            {data: 'machineNo'},
            {data: 'consumptionRate'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadEnergys = function () {
        $scope.dataTable.clear();
        energyService.getAll().then(function (response) {
            $scope.energys = response.data;
            $scope.dataTable.rows.add($scope.energys).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#energyGridModal').on('shown.bs.modal', function () {
        $scope.loadEnergys();
    })
    $('#energyGridModal').on('hidden.bs.modal', function () {

    })

});
