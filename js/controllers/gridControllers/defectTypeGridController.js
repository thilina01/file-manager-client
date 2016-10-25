app.controller('defectTypeGridController', function ($http, $scope, $cookies, defectTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            defectTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#defectTypeGridModal').modal('hide');
            $('#defectTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            defectTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.defectTypes = '';
    $scope.table = $('#defectTypeTable');
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
        defectTypeService.getAll().then(function (response) {
            $scope.defectTypes = response.data;
            $scope.dataTable.rows.add($scope.defectTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#defectTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadDefectTypes();
    })
    $('#defectTypeGridModal').on('hidden.bs.modal', function () {

    })

});