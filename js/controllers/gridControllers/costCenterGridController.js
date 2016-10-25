app.controller('costCenterGridController', function ($http, $scope, $cookies, costCenterService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            costCenterService.toEdit = $scope.dataTable.row('.selected').data();
            $('#costCenterGridModal').modal('hide');
            $('#costCenterModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            costCenterService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.costCenters = '';
    $scope.table = $('#costCenterTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'},
            {data: 'section.code'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadCostCenters = function () {
        $scope.dataTable.clear();
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;
            $scope.dataTable.rows.add($scope.costCenters).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#costCenterGridModal').on('shown.bs.modal', function () {
        $scope.loadCostCenters();
    })
    $('#costCenterGridModal').on('hidden.bs.modal', function () {

    })

});
