app.controller('deliveryGridController', function ($http, $scope, $cookies, deliveryService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            deliveryService.toEdit = $scope.dataTable.row('.selected').data();
            $('#deliveryGridModal').modal('hide');
            $('#deliveryModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            deliveryService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.deliveries = '';
    $scope.table = $('#deliveryTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'deliveryDate'},
            {data: 'quantity'},
            {data: 'location'},
            {data: 'item.code'},
            {data: 'purchaseOrder.poNumber'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadDeliveries = function () {
        $scope.dataTable.clear();
        deliveryService.getAll().then(function (response) {
            $scope.deliveries = response.data;
            $scope.dataTable.rows.add($scope.deliveries).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#deliveryGridModal').on('shown.bs.modal', function () {
        $scope.loadDeliveries();
    })
    $('#deliveryGridModal').on('hidden.bs.modal', function () {
    })

});