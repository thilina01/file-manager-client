app.controller('controlPointRunJobGridController', function ($http, $scope, $cookies, controlPointRunJobService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunJobService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointRunJobGridModal').modal('hide');
            $('#controlPointRunJobModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunJobService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointJobRuns = '';
    $scope.table = $('#controlPointRunJobTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'controlPointRunJob.jobId'},
            {data: 'controlPointRunJob.jobQuantity'},
            {data: 'controlPointRunJob.job.item.code'},
           
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPointRunJobs = function () {
        $scope.dataTable.clear();
        controlPointRunJobService.getAll().then(function (response) {
            $scope.controlPointRunJobs = response.data;
            $scope.dataTable.rows.add($scope.controlPointRunJobs).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointRunJobGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointRunJobs();
    })
    $('#controlPointRunJobGridModal').on('hidden.bs.modal', function () {

    })

});
