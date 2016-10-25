app.controller('purchaseOrderGridController', function ($http, $scope, $cookies, purchaseOrderService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            purchaseOrderService.toEdit = $scope.dataTable.row('.selected').data();
            $('#purchaseOrderGridModal').modal('hide');
            $('#purchaseOrderModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            purchaseOrderService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.purchaseOrders = '';
    $scope.table = $('#purchaseOrderTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'poNumber'},
            {data: 'orderReceivedDate'},
            {data: 'actualDispatchedDate'},
            {data: 'purchaseOrderType.type'},
            {data: 'customer.name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPurchaseOrders = function () {
        $scope.dataTable.clear();
        purchaseOrderService.getAll().then(function (response) {
            $scope.purchaseOrders = response.data;
            $scope.dataTable.rows.add($scope.purchaseOrders).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#purchaseOrderGridModal').on('show.bs.modal', function () {
        $scope.loadPurchaseOrders();
    })
    $('#purchaseOrderGridModal').on('hidden.bs.modal', function () {

    })

});
