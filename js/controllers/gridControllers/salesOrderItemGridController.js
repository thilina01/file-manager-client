app.controller('salesOrderItemGridController', function ($http, $scope, $cookies, salesOrderItemService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            salesOrderItemService.toEdit = $scope.dataTable.row('.selected').data();
            $('#salesOrderItemGridModal').modal('hide');
            $('#salesOrderItemModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            salesOrderItemService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.salesOrderItems = '';
    $scope.table = $('#salesOrderItemTable');
    $scope.dataTable = $scope.table.DataTable({

        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPurchaseOrderItems = function () {
        $scope.dataTable.clear();
        salesOrderItemService.getAll().then(function (response) {
            $scope.salesOrderItems = response.data;
            $scope.dataTable.rows.add($scope.salesOrderItems).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#salesOrderItemGridModal').on('show.bs.modal', function () {
        $scope.loadPurchaseOrderItems();
    })
    $('#salesOrderItemGridModal').on('hidden.bs.modal', function () {

    })

});
