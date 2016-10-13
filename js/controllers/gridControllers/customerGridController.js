
app.controller('customerGridController', function ($http, $scope, $cookies, customerService, appService) {

    $scope.customers = '';

    $scope.loadcustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;

            var x = $('#customerTable').DataTable({
                data: $scope.customers,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#customerGridModal').on('shown.bs.modal', function () {
        $scope.loadcustomers();
    })
    $('#customerGridModal').on('hidden.bs.modal', function () {
        $('#customerTable').DataTable().destroy();
    })
});