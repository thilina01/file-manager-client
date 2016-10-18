
app.controller('scrapTypeGridController', function ($http, $scope, $cookies, scrapTypeService, appService) {

    $scope.scrapTypes = '';

    $scope.loadscrapTypes = function () {
        scrapTypeService.getAll().then(function (response) {
            $scope.scrapTypes = response.data;

            var x = $('#scrapTypeTable').DataTable({
                data: $scope.scrapTypes,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#scrapTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadscrapTypes();
    })
    $('#scrapTypeGridModal').on('hidden.bs.modal', function () {
        $('#scrapTypeTable').DataTable().destroy();
    })
});