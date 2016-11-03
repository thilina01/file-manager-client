app.controller('controlPointRunGridController', function ($http, $scope, $cookies, controlPointRunService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointRunGridModal').modal('hide');
            $('#controlPointRunModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointRuns = '';
    $scope.table = $('#controlPointRunTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'runDate'},
            {data: 'shift'},
            {data: 'controlPoint.code'},
            {data: 'workingDuretion'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPointRuns = function () {
        $scope.dataTable.clear();
        controlPointRunService.getAll().then(function (response) {
            $scope.controlPointRuns = response.data;
            $scope.dataTable.rows.add($scope.controlPointRuns).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointRunGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointRuns();
    })
    $('#controlPointRunGridModal').on('hidden.bs.modal', function () {

    })

});
