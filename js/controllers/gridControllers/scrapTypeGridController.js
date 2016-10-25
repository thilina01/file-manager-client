app.controller('scrapTypeGridController', function ($http, $scope, $cookies, scrapTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            scrapTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#scrapTypeGridModal').modal('hide');
            $('#scrapTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            scrapTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.scrapTypes = '';
    $scope.table = $('#scrapTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'},
            {data: 'typeInSinhala'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadScrapTypes = function () {
        $scope.dataTable.clear();
        scrapTypeService.getAll().then(function (response) {
            $scope.scrapTypes = response.data;
            $scope.dataTable.rows.add($scope.scrapTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#scrapTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadScrapTypes();
    })
    $('#scrapTypeGridModal').on('hidden.bs.modal', function () {

    })

});
