app.controller('teamGridController', function ($http, $scope, $cookies, teamService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            teamService.toEdit = $scope.dataTable.row('.selected').data();
            $('#teamGridModal').modal('hide');
            $('#teamModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            teamService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.teams = '';
    $scope.table = $('#teamTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });

    $scope.loadTeams = function () {
        $scope.dataTable.clear();
        teamService.getAll().then(function (response) {
            $scope.teams = response.data;
            $scope.dataTable.rows.add($scope.teams).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#teamGridModal').on('show.bs.modal', function () {
        $scope.loadTeams();
    })
    $('#teamGridModal').on('hidden.bs.modal', function () {
    })

});