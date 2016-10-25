app.controller('itemTypeGridController', function ($http, $scope, $cookies, itemTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            itemTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#itemTypeGridModal').modal('hide');
            $('#itemTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            itemTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.itemTypes = '';
    $scope.table = $('#itemTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'}

        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadItemTypes = function () {
        $scope.dataTable.clear();
        itemTypeService.getAll().then(function (response) {
            $scope.itemTypes = response.data;
            $scope.dataTable.rows.add($scope.itemTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#itemTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadItemTypes();
    })
    $('#itemTypeGridModal').on('hidden.bs.modal', function () {

    })

});
