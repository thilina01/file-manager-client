app.controller('controlPointPlanManpowerGridController', function ($http, $scope, $cookies, controlPointPlanManpowerService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointPlanManpowerService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointPlanManpowerGridModal').modal('hide');
            $('#controlPointPlanManpowerModal').modal('show');
        }
    }
    
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointPlanManpowerService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointPlanManpowers = '';
    $scope.table = $('#controlPointPlanManpowerTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'controlPointPlan.controlPoint.code'},
            {data: 'controlPointPlan.runDate'},
            {data: 'controlPointPlan.shift.code'},
            {data: 'manpowerType.type'},
            {data: 'count'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    
    $scope.loadControlPointPlanManpowers = function () {
        $scope.dataTable.clear();
        controlPointPlanManpowerService.getAll().then(function (response) {
            $scope.controlPointPlanManpowers = response.data;
            console.log($scope.controlPointPlanManpowers);
            $scope.dataTable.rows.add($scope.controlPointPlanManpowers).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointPlanManpowerGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointPlanManpowers();
    })
    $('#controlPointPlanManpowerGridModal').on('hidden.bs.modal', function () {

    })

});
