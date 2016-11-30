app.controller('jobDispatchGridController', function ($http, $scope, $cookies, jobDispatchService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            jobDispatchService.toEdit = $scope.dataTable.row('.selected').data();
            $('#jobDispatchGridModal').modal('hide');
            $('#jobDispatchModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            jobDispatchService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.jobDispatchs = '';
    $scope.table = $('#jobDispatchTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'dispatch.date'},
            {data: 'job.jobNo'},
            {data: 'quantity'},
            {data: 'job.item.code'},
            {data: 'job.item.code'},
            {data: 'job.salesOrderItem.salesOrder.customer'}
            
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadCustomers = function () {
        $scope.dataTable.clear();
        jobDispatchService.getAll().then(function (response) {
            $scope.jobDispatchs = response.data;
            $scope.dataTable.rows.add($scope.jobDispatchs).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#jobDispatchGridModal').on('show.bs.modal', function () {
        $scope.loadCustomers();
    })
    $('#jobDispatchGridModal').on('hidden.bs.modal', function () {

    })

});
