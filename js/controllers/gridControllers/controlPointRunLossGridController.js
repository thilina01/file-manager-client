app.controller('controlPointRunLossGridController', function ($http, $scope, $cookies, controlPointRunLossService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunLossService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointRunLossGridModal').modal('hide');
            $('#controlPointRunLossModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunLossService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointJobRuns = '';
    $scope.table = $('#controlPointRunLossTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'controlPointRun.controlPoint.code'},
            {data: 'controlPointRun.runDate'},
            {data: 'controlPointRun.shift.code'},
            {data: 'lossReason.lossType.type'},
            {data: 'lossReason.reason'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPointRunJobs = function () {
        $scope.dataTable.clear();
        controlPointRunLossService.getAll().then(function (response) {
            $scope.controlPointRunLosss = response.data;
            $scope.dataTable.rows.add($scope.controlPointRunLosss).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointRunLossGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointRunJobs();
    })
    $('#controlPointRunLossGridModal').on('hidden.bs.modal', function () {

    })

});
