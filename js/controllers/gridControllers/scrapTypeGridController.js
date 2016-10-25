
app.controller('scrapTypeGridController', function ($http, $scope, $cookies, scrapTypeService, appService) {

    $scope.scrapTypes = '';

    $scope.loadscrapTypes = function () {
        scrapTypeService.getAll().then(function (response) {
            $scope.scrapTypes = response.data;

            var x = $('#scrapTypeTable').DataTable({
                data: $scope.scrapTypes,
                columns: [
                    {data: 'code'},
                    {data: 'type'},
                    {data: 'typeInSinhala'}
                ]
            });
        });
    }

    $('#scrapTypeGridModal').on('show.bs.modal', function () {
        $scope.loadscrapTypes();
    })
    $('#scrapTypeGridModal').on('hidden.bs.modal', function () {
        $('#scrapTypeTable').DataTable().destroy();
    })
});