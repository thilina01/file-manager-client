app.controller('jobTypeGridController', function ($http, $scope, $cookies, jobTypeService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            jobTypeService.toEdit = $scope.dataTable.row('.selected').data();
            $('#jobTypeGridModal').modal('hide');
            $('#jobTypeModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            jobTypeService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.jobTypes = '';
    $scope.table = $('#jobTypeTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'type'}

        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadPurchaseOrderTypes = function () {
        $scope.dataTable.clear();
        jobTypeService.getAll().then(function (response) {
            $scope.jobTypes = response.data;
            $scope.dataTable.rows.add($scope.jobTypes).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#jobTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadPurchaseOrderTypes();
    })
    $('#jobTypeGridModal').on('hidden.bs.modal', function () {

    })

});
