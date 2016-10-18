
app.controller('currencyGridController', function ($http, $scope, $cookies, currencyService, appService) {

    $scope.currencies = '';

    $scope.loadCurrencies = function () {
        currencyService.getAll().then(function (response) {
            $scope.currencies = response.data;

            var x = $('#currencyTable').DataTable({
                data: $scope.currencies,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#currencyGridModal').on('shown.bs.modal', function () {
        $scope.loadCurrencies();
    })
    $('#currencyGridModal').on('hidden.bs.modal', function () {
        $('#currencyTable').DataTable().destroy();
    })
});