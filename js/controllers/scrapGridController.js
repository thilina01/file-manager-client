
app.controller('scrapGridController', function ($http, $scope, $cookies, scrapService, appService) {

    $scope.scraps = '';

    $scope.loadscraps = function () {
        scrapService.getAll().then(function (response) {
            $scope.scraps = response.data;

            var x = $('#scrapTable').DataTable({
                data: $scope.scraps,
                columns: [
                    {data: 'code'},
                    {data: 'type'},
                    {data: 'typeInShinhala'}
                ]
            });
        });
    }

    $('#scrapGridModal').on('shown.bs.modal', function () {
        $scope.loadscraps();
    })
    $('#scrapGridModal').on('hidden.bs.modal', function () {
        $('#scrapTable').DataTable().destroy();
    })
});