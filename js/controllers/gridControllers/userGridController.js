app.controller('userGridController', function ($http, $scope, $cookies, userService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            userService.toEdit = $scope.dataTable.row('.selected').data();
            $('#userGridModal').modal('hide');
            $('#userModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            userService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.users = '';
    $scope.table = $('#userTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'email'},
            {data: 'status'},
            {data: 'team.name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });

    $scope.loadCountries = function () {
        $scope.dataTable.clear();
        userService.getAll().then(function (response) {
            $scope.users = response.data;
            $scope.dataTable.rows.add($scope.users).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#userGridModal').on('show.bs.modal', function () {
        $scope.loadCountries();
    })
    $('#userGridModal').on('hidden.bs.modal', function () {
    })

});