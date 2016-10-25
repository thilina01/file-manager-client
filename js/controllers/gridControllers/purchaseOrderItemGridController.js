app.controller('purchaseOrderItemGridController', function ($http, $scope, $cookies, purchaseOrderItemService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            purchaseOrderItemService.toEdit = $scope.dataTable.row('.selected').data();
            $('#purchaseOrderItemGridModal').modal('hide');
            $('#purchaseOrderItemModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            purchaseOrderItemService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.purchaseOrderItems = '';
    $scope.table = $('#purchaseOrderItemTable');
    $scope.dataTable = $scope.table.DataTable({

        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPurchaseOrderItems = function () {
        $scope.dataTable.clear();
        purchaseOrderItemService.getAll().then(function (response) {
            $scope.purchaseOrderItems = response.data;
            $scope.dataTable.rows.add($scope.purchaseOrderItems).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#purchaseOrderItemGridModal').on('show.bs.modal', function () {
        $scope.loadPurchaseOrderItems();
    })
    $('#purchaseOrderItemGridModal').on('hidden.bs.modal', function () {

    })

});
