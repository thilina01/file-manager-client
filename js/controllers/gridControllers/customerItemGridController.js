app.controller('customerItemGridController', function ($http, $scope, $cookies, customerItemService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            customerItemService.toEdit = $scope.dataTable.row('.selected').data();
            $('#customerItemGridModal').modal('hide');
            $('#customerItemModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            customerItemService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.customerItems = '';
    $scope.table = $('#customerItemTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'customerPartNo'},
            {data: 'price'},
            {data: 'customer.name'},
            {data: 'item.description'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadcustomerItems = function () {
        $scope.dataTable.clear();
        customerItemService.getAll().then(function (response) {
            $scope.customerItems = response.data;
            $scope.dataTable.rows.add($scope.customerItems).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#customerItemGridModal').on('shown.bs.modal', function () {
        $scope.loadcustomerItems();
    })
    $('#customerItemGridModal').on('hidden.bs.modal', function () {

    })

});