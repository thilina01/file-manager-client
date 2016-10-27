app.controller('salesOrderTypeGridController', function ($http, $scope, $cookies, salesOrderTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            salesOrderTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#salesOrderTypeGridModal').modal('hide');
            $('#salesOrderTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            salesOrderTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.salesOrderTypes = '';
    $scope.table = $('#salesOrderTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'}

        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPurchaseOrderTypes = function () {
        $scope.dataTable.clear();
        salesOrderTypeService.getAll().then(function (response) {
            $scope.salesOrderTypes = response.data;
            $scope.dataTable.rows.add($scope.salesOrderTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#salesOrderTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadPurchaseOrderTypes();
    })
    $('#salesOrderTypeGridModal').on('hidden.bs.modal', function () {

    })

});
