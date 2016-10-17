
app.controller('costGridController', function ($http, $scope, $cookies, costService, appService) {

    $scope.costs = '';

    $scope.loadcosts = function () {
        costService.getAll().then(function (response) {
            $scope.costs = response.data;

            var x = $('#costTable').DataTable({
                data: $scope.costs,
                columns: [
                    {data: 'code'},
                    {price: 'price'}
                ]
            });
        });
    }

    $('#costGridModal').on('shown.bs.modal', function () {
        $scope.loadcosts();
    })
    $('#costGridModal').on('hidden.bs.modal', function () {
        $('#costTable').DataTable().destroy();
    })
});