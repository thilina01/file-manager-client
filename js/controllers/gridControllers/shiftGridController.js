app.controller('shiftGridController', function ($http, $scope, $cookies, shiftService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            shiftService.toEdit = $scope.dataTable.row('.selected').data();
            $('#shiftGridModal').modal('hide');
            $('#shiftModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            shiftService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.shifts = '';
    $scope.table = $('#shiftTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadShifts = function () {
        $scope.dataTable.clear();
        shiftService.getAll().then(function (response) {
            $scope.shifts = response.data;
            $scope.dataTable.rows.add($scope.shifts).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#shiftGridModal').on('shown.bs.modal', function () {
        $scope.loadShifts();
    })
    $('#shiftGridModal').on('hidden.bs.modal', function () {
       
    })

});
