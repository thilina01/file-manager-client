app.controller('controlPointRunBreakdownGridController', function ($http, $scope, $cookies, controlPointRunBreakdownService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunBreakdownService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointRunBreakdownGridModal').modal('hide');
            $('#controlPointRunBreakdownModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunBreakdownService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointJobRuns = '';
    $scope.table = $('#controlPointRunBreakdownTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'controlPointRun.machine.code'},
            {data: 'breakdown'},
            {data: 'reason'}
           
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPointRunJobs = function () {
        $scope.dataTable.clear();
        controlPointRunBreakdownService.getAll().then(function (response) {
            $scope.controlPointRunBreakdowns = response.data;
            $scope.dataTable.rows.add($scope.controlPointRunBreakdowns).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointRunBreakdownGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointRunJobs();
    })
    $('#controlPointRunBreakdownGridModal').on('hidden.bs.modal', function () {

    })

});
