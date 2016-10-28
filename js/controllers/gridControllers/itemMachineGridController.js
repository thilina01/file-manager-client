app.controller('itemMachineGridController', function ($http, $scope, $cookies, itemMachineService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            itemMachineService.toEdit = $scope.dataTable.row('.selected').data();
            $('#itemMachineGridModal').modal('hide');
            $('#itemMachineModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            itemMachineService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.itemMachines = '';
    $scope.table = $('#itemMachineTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'machineNo'},
            {data: 'consumptionRate'}
            
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadItemMachines = function () {
        $scope.dataTable.clear();
       itemMachineService.getAll().then(function (response) {
            $scope.itemMachines = response.data;
            $scope.dataTable.rows.add($scope.itemMachines).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#itemMachineGridModal').on('show.bs.modal', function () {
        $scope.loadItemMachines();
    })
    $('#itemMachineGridModal').on('hidden.bs.modal', function () {

    })

});
