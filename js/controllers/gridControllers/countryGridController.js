app.controller('countryGridController', function ($http, $scope, $cookies, countryService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            countryService.toEdit = $scope.dataTable.row('.selected').data();
            $('#countryGridModal').modal('hide');
            $('#countryModal').modal('show');
        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            countryService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.countries = '';
    $scope.table = $('#countryTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });

    $scope.loadCountries = function () {
        $scope.dataTable.clear();
        countryService.getAll().then(function (response) {
            $scope.countries = response.data;
            $scope.dataTable.rows.add($scope.countries).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#countryGridModal').on('show.bs.modal', function () {
        $scope.loadCountries();
    })
    $('#countryGridModal').on('hidden.bs.modal', function () {
    })

});