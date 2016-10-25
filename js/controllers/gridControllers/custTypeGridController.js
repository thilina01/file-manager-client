app.controller('custTypeGridController', function ($http, $scope, $cookies, custTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            custTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#custTypeGridModal').modal('hide');
            $('#custTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            custTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.CustTypes = '';
    $scope.table = $('#custTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadCustTypes = function () {
        $scope.dataTable.clear();
        custTypeService.getAll().then(function (response) {
            $scope.CustTypes = response.data;
            $scope.dataTable.rows.add($scope.CustTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#custTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadCustTypes();
    })
    $('#custTypeGridModal').on('hidden.bs.modal', function () {
       
    })

});
