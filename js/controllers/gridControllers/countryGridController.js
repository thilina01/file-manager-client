
app.controller('countryGridController', function ($http, $scope, $cookies, countryService, appService) {

    $scope.countries = '';

    $scope.loadcountries = function () {
        countryService.getAll().then(function (response) {
            $scope.countries = response.data;

            var x = $('#countryTable').DataTable({
                data: $scope.countries,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#countryGridModal').on('shown.bs.modal', function () {
        $scope.loadcountries();
    })
    $('#countryGridModal').on('hidden.bs.modal', function () {
        $('#countryTable').DataTable().destroy();
    })
});