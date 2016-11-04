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
            {data: 'controlPointRunManpower.manpowerTypeId'},
            {data: 'controlPointRunManpower.count'},
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPointRunManpowers = function () {
        $scope.dataTable.clear();
        controlPointRunManpowerService.getAll().then(function (response) {
            $scope.controlPointRunManpowers = response.data;
            $scope.dataTable.rows.add($scope.controlPointRunManpowers).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointRunManpowerGridModal').on('show.bs.modal', function () {
        $scope.loadControlPointRunJobs();
    })
    $('#controlPointRunManpowerGridModal').on('hidden.bs.modal', function () {

    })

});
