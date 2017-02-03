app.controller('operationGridController', function ($http, $scope, $cookies, operationService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            operationService.toEdit = $scope.dataTable.row('.selected').data();
            $('#operationGridModal').modal('hide');
            $('#operationModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            operationService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.operations = '';
    $scope.table = $('#operationTable');
    $scope.dataTable = $scope.table.DataTable({
                columns: [
                    {data: 'code'},
                    {data: 'description'},
                   
                ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPaints = function () {
        $scope.dataTable.clear();
        operationService.getAll().then(function (response) {
            $scope.operations = response.data;
            $scope.dataTable.rows.add($scope.operations).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#operationGridModal').on('show.bs.modal', function () {
        $scope.loadPaints();
    })
    $('#operationGridModal').on('hidden.bs.modal', function () {
       
    })

});
