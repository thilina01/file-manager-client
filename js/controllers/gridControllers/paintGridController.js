app.controller('paintGridController', function ($http, $scope, $cookies, paintService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            paintService.toEdit = $scope.dataTable.row('.selected').data();
            $('#paintGridModal').modal('hide');
            $('#paintModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            paintService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.paints = '';
    $scope.table = $('#paintTable');
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
        paintService.getAll().then(function (response) {
            $scope.paints = response.data;
            $scope.dataTable.rows.add($scope.paints).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#paintGridModal').on('shown.bs.modal', function () {
        $scope.loadPaints();
    })
    $('#paintGridModal').on('hidden.bs.modal', function () {
       
    })

});
