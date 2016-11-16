app.controller('controlPointPlanJobGridController', function ($http, $scope, $cookies, controlPointPlanJobService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointPlanJobService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointPlanJobGridModal').modal('hide');
            $('#controlPointPlanJobModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointPlanJobService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointJobRuns = '';
    $scope.table = $('#controlPointPlanJobTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'controlPointPlan.runDate'},
            {data: 'controlPointPlan.controlPoint.code'},
            {data: 'controlPointPlan.shift.code'},
            {data: 'job.id'},
            {data: 'quantity'}
           
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPointPlanJobs = function () {
        alert("ffff");
        $scope.dataTable.clear();
        controlPointPlanJobService.getAll().then(function (response) {
            $scope.controlPointPlanJobs = response.data;
            $scope.dataTable.rows.add($scope.controlPointPlanJobs).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointPlanJobGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointPlanJobs();
    })
    $('#controlPointPlanJobGridModal').on('hidden.bs.modal', function () {

    })

});
