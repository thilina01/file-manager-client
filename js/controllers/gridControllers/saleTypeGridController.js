app.controller('saleTypeGridController', function ($http, $scope, $cookies, saleTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            saleTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#saleTypeGridModal').modal('hide');
            $('#saleTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            saleTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.SaleTypes = '';
    $scope.table = $('#saleTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadSaleTypes = function () {
        $scope.dataTable.clear();
        saleTypeService.getAll().then(function (response) {
            $scope.SaleTypes = response.data;
            $scope.dataTable.rows.add($scope.SaleTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#saleTypeGridModal').on('show.bs.modal', function () {
        $scope.loadSaleTypes();
    })
    $('#saleTypeGridModal').on('hidden.bs.modal', function () {
       
    })

});
