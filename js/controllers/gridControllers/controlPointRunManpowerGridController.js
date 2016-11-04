app.controller('controlPointRunManpowerGridController', function ($http, $scope, $cookies, controlPointRunManpowerService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunManpowerService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointRunManpowerGridModal').modal('hide');
            $('#controlPointRunManpowerModal').modal('show');
        }
    }
    
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointRunManpowerService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPointRunManpowers = '';
    $scope.table = $('#controlPointRunManpowerTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'controlPointRun.controlPoint.code'},
            {data: 'controlPointRun.runDate'},
            {data: 'controlPointRun.shift.code'},
            {data: 'manpowerType.type'},
            {data: 'count'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    
    $scope.loadControlPointRunManpowers = function () {
        $scope.dataTable.clear();
        controlPointRunManpowerService.getAll().then(function (response) {
            $scope.controlPointRunManpowers = response.data;
            console.log($scope.controlPointRunManpowers);
            $scope.dataTable.rows.add($scope.controlPointRunManpowers).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointRunManpowerGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointRunManpowers();
    })
    $('#controlPointRunManpowerGridModal').on('hidden.bs.modal', function () {

    })

});
