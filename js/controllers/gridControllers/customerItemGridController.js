
app.controller('customerItemGridController', function ($http, $scope, $cookies, customerItemService, appService) {

    $scope.customerItems = '';

    $scope.loadcustomerItems = function () {
        customerItemService.getAll().then(function (response) {
            $scope.customerItems = response.data;

            var x = $('#customerItemTable').DataTable({
                data: $scope.customerItems,
                columns: [
                    {data: 'customer_part-no'},
                    {data: 'price'},
                    {data: 'customer.name'}
                ]
            });
        });
    }

    $('#customerItemGridModal').on('shown.bs.modal', function () {
        $scope.loadcustomerItems();
    })
    $('#customerItemGridModal').on('hidden.bs.modal', function () {
        $('#customerItemTable').DataTable().destroy();
    })
});