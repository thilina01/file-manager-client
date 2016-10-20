
app.controller('customerGridController', function ($http, $scope, $cookies, customerService, appService) {

    $scope.customers = '';

    $scope.loadcustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;

            var x = $('#customerTable').DataTable({
                data: $scope.customers,
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
                    {data: 'incoterm'},
                    {data: 'custType'},
                    {data: 'vatNo'},
                    {data: 'sVatNo'},
                    {data: 'currency'},
                    {data: 'country'},
                    {data: 'finalDestination'},
                    {data: 'continent'},
                    {data: 'note'}
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