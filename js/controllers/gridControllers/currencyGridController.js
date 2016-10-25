app.controller('currencyGridController', function ($http, $scope, $cookies, currencyService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            currencyService.toEdit = $scope.dataTable.row('.selected').data();
            $('#currencyGridModal').modal('hide');
            $('#currencyModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            currencyService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.currencies = '';
    $scope.table = $('#currencyTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadCurrencies = function () {
        $scope.dataTable.clear();
        currencyService.getAll().then(function (response) {
            $scope.currencies = response.data;
            $scope.dataTable.rows.add($scope.currencies).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#currencyGridModal').on('show.bs.modal', function () {
        $scope.loadCurrencies();
    })
    $('#currencyGridModal').on('hidden.bs.modal', function () {
       
    })

});
