app.controller('lossReasonGridController', function ($http, $scope, $cookies, lossReasonService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            lossReasonService.toEdit = $scope.dataTable.row('.selected').data();
            $('#lossReasonGridModal').modal('hide');
            $('#lossReasonModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            lossReasonService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.lossReasons = '';
    $scope.table = $('#lossReasonTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'},
            {data: 'typeInSinhala'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadLossReasons = function () {
        $scope.dataTable.clear();
        lossReasonService.getAll().then(function (response) {
            $scope.lossReasons = response.data;
            $scope.dataTable.rows.add($scope.lossReasons).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#lossReasonGridModal').on('shown.bs.modal', function () {
        $scope.loadLossReasons();
    })
    $('#lossReasonGridModal').on('hidden.bs.modal', function () {

    })

});
