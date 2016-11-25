app.controller('customerJobGridController', function ($http, $scope, $cookies, customerJobService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            customerJobService.toEdit = $scope.dataTable.row('.selected').data();
            $('#customerJobGridModal').modal('hide');
            $('#customerJobModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            customerJobService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.customerJobs = '';
    $scope.table = $('#customerJobTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'job.jobNo'},
            {data: 'customer.code'},
            {data: 'salesOrder.poNo'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadCustomerJobs = function () {
        $scope.dataTable.clear();
        customerJobService.getAll().then(function (response) {
            $scope.customerJobs = response.data;
            $scope.dataTable.rows.add($scope.customerJobs).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#customerJobGridModal').on('show.bs.modal', function () {
        $scope.loadCustomerJobs();
    })
    $('#customerJobGridModal').on('hidden.bs.modal', function () {

    })

});