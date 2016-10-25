app.controller('incotermGridController', function ($http, $scope, $cookies, incotermService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            incotermService.toEdit = $scope.dataTable.row('.selected').data();
            $('#incotermGridModal').modal('hide');
            $('#incotermModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            incotermService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.incoterms = '';
    $scope.table = $('#incotermTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadIncoterms = function () {
        $scope.dataTable.clear();
        incotermService.getAll().then(function (response) {
            $scope.incoterms = response.data;
            $scope.dataTable.rows.add($scope.incoterms).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#incotermGridModal').on('shown.bs.modal', function () {
        $scope.loadIncoterms();
    })
    $('#incotermGridModal').on('hidden.bs.modal', function () {

    })

});
