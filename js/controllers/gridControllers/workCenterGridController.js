app.controller('workCenterGridController', function ($http, $scope, $cookies, workCenterService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            workCenterService.toEdit = $scope.dataTable.row('.selected').data();
            $('#workCenterGridModal').modal('hide');
            $('#workCenterModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            workCenterService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.workCenters = '';
    $scope.table = $('#workCenterTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'},
            {data: 'costCenter.name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadWorkCenters = function () {
        $scope.dataTable.clear();
        workCenterService.getAll().then(function (response) {
            $scope.workCenters = response.data;
            $scope.dataTable.rows.add($scope.workCenters).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#workCenterGridModal').on('shown.bs.modal', function () {
        $scope.loadWorkCenters();
    })
    $('#workCenterGridModal').on('hidden.bs.modal', function () {

    })

});
