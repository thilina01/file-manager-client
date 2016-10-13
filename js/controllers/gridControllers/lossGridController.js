
app.controller('lossGridController', function ($http, $scope, $cookies, lossService, appService) {

    $scope.losses = '';

    $scope.loadlossets = function () {
        lossService.getAll().then(function (response) {
            $scope.losses = response.data;

            var x = $('#lossTable').DataTable({
                data: $scope.losses,
                columns: [
                    {data: 'code'},
                    {data: 'type'},
                    {data: 'typeInShinhala'}
                ]
            });
        });
    }

    $('#lossGridModal').on('shown.bs.modal', function () {
        $scope.loadlosses();
    })
    $('#lossGridModal').on('hidden.bs.modal', function () {
        $('#lossTable').DataTable().destroy();
    })
});