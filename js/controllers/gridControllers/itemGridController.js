app.controller('itemGridController', function ($http, $scope, $cookies, itemService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            itemService.toEdit = $scope.dataTable.row('.selected').data();
            $('#itemGridModal').modal('hide');
            $('#itemModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            itemService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.items = '';
    $scope.table = $('#itemTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'description'},
            {data: 'itemType.code'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadItems = function () {
        $scope.dataTable.clear();
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
            $scope.dataTable.rows.add($scope.items).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#itemGridModal').on('shown.bs.modal', function () {
        $scope.loadItems();
    })
    $('#itemGridModal').on('hidden.bs.modal', function () {

    })

});
