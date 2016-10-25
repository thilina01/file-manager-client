app.controller('purchaseOrderTypeGridController', function ($http, $scope, $cookies, purchaseOrderTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            purchaseOrderTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#purchaseOrderTypeGridModal').modal('hide');
            $('#purchaseOrderTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            purchaseOrderTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.purchaseOrderTypes = '';
    $scope.table = $('#purchaseOrderTypeTable');
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
        purchaseOrderTypeService.getAll().then(function (response) {
            $scope.purchaseOrderTypes = response.data;
            $scope.dataTable.rows.add($scope.purchaseOrderTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#purchaseOrderTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadPurchaseOrderTypes();
    })
    $('#purchaseOrderTypeGridModal').on('hidden.bs.modal', function () {

    })

});
