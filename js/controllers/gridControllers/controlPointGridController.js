app.controller('controlPointGridController', function ($http, $scope, $cookies, controlPointService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointService.toEdit = $scope.dataTable.row('.selected').data();
            $('#controlPointGridModal').modal('hide');
            $('#controlPointModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            controlPointService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.controlPoints = '';
    $scope.table = $('#controlPointTable');
    $scope.dataTable = $scope.table.DataTable({
                columns: [
                    {data: 'code'},
                    {data: 'name'},
                    {data: 'wcc'},
                    {data: 'section'}
                ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadControlPoints = function () {
        $scope.dataTable.clear();
        controlPointService.getAll().then(function (response) {
            $scope.controlPoints = response.data;
            $scope.dataTable.rows.add($scope.controlPoints).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#controlPointGridModal').on('shown.bs.modal', function () {
        $scope.loadControlPoints();
    })
    $('#controlPointGridModal').on('hidden.bs.modal', function () {
       
    })

});
