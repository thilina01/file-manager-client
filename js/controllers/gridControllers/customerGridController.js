app.controller('customerGridController', function ($http, $scope, $cookies, customerService, dataTableService, appService) {

    $scope.edit = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            customerService.toEdit = $scope.dataTable.row('.selected').data();
            $('#customerGridModal').modal('hide');
            $('#customerModal').modal('show');

        }
    }
    $scope.delete = function () {
        if ($scope.dataTable.row('.selected').data() != undefined) {
            customerService.delete($scope.dataTable.row('.selected').data().id).then(
                    function (response) {
                        $scope.dataTable.row('.selected').remove().draw(false);
                    });
        }
    }

    $scope.customers = '';
    $scope.table = $('#customerTable');
    $scope.dataTable = $scope.table.DataTable({
        columns: [
            {data: 'code'},
            {data: 'name'},
            {data: 'officeAddress'},
            {data: 'consignee'},
            {data: 'notifyParty'},
            {data: 'contact'},
            {data: 'phoneNo'},
            {data: 'fax'},
            {data: 'paymentTerm'},
            {data: 'incoterm.code'},
            {data: 'saleType.code'},
            {data: 'vatNo'},
            {data: 'sVatNo'},
            {data: 'currency.code'},
            {data: 'country.code'},
            {data: 'finalDestination'},
            {data: 'continent'},
            {data: 'note'}
        ],
        dom: 'Bfrtip',
        buttons: dataTableService.getButtons($scope.edit, $scope.delete)
    });
    $scope.loadCustomers = function () {
        $scope.dataTable.clear();
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
            $scope.dataTable.rows.add($scope.customers).draw();
        });
    }

    $scope.table.on('click', 'tr', dataTableService.getRowSelector($scope.dataTable));

    $('#customerGridModal').on('show.bs.modal', function () {
        $scope.loadCustomers();
    })
    $('#customerGridModal').on('hidden.bs.modal', function () {

    })

});
