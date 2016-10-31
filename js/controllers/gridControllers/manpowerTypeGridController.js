app.controller('manpowerTypeGridController', function ($http, $scope, $cookies, manpowerTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            manpowerTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#manpowerTypeGridModal').modal('hide');
            $('#manpowerTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            manpowerTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.manpowerTypes = '';
    $scope.table = $('#manpowerTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'}
           
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadScrapTypes = function () {
        $scope.dataTable.clear();
        manpowerTypeService.getAll().then(function (response) {
            $scope.manpowerTypes = response.data;
            $scope.dataTable.rows.add($scope.manpowerTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#manpowerTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadScrapTypes();
    })
    $('#manpowerTypeGridModal').on('hidden.bs.modal', function () {

    })

});
