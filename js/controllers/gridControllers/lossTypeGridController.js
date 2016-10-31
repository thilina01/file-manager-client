app.controller('lossTypeGridController', function ($http, $scope, $cookies, lossTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            lossTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#lossTypeGridModal').modal('hide');
            $('#lossTypeModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            lossTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.lossTypes = '';
    $scope.table = $('#lossTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'},
            {data: 'typeInSinhala'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadDefectTypes = function () {
        $scope.dataTable.clear();
        lossTypeService.getAll().then(function (response) {
            $scope.lossTypes = response.data;
            $scope.dataTable.rows.add($scope.lossTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#lossTypeGridModal').on('show.bs.modal', function () {
        $scope.loadDefectTypes();
    })
    $('#lossTypeGridModal').on('hidden.bs.modal', function () {

    })

});