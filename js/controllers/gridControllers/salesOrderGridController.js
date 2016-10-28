app.controller('salesOrderGridController', function ($http, $scope, $cookies, salesOrderService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            salesOrderService.toEdit = $scope.dataTable.row('.selected').data();
            $('#salesOrderGridModal').modal('hide');
            $('#salesOrderModal').modal('show');

        }
    }
    
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            salesOrderService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.salesOrders = '';
    $scope.table = $('#salesOrderTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'poNumber'},
            {data: 'orderReceivedDate'},
            {data: 'actualDispatchedDate'},
            {data: 'salesOrderType.type'},
            {data: 'customer.name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPurchaseOrders = function () {
        $scope.dataTable.clear();
        salesOrderService.getAll().then(function (response) {
            $scope.salesOrders = response.data;
            $scope.dataTable.rows.add($scope.salesOrders).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#salesOrderGridModal').on('show.bs.modal', function () {
        $scope.loadPurchaseOrders();
    })
    $('#salesOrderGridModal').on('hidden.bs.modal', function () {

    })

});
