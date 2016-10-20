
app.controller('itemGridController', function ($http, $scope, $cookies, itemService, appService) {

    $scope.items = '';

    $scope.loaditems = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;

            var x = $('#itemTable').DataTable({
                data: $scope.items,
                columns: [
                    {data: 'code'},
                    {data: 'description'},
                    {data: 'itemType.code'}
                ]
            });
        });
    }

    $('#itemGridModal').on('shown.bs.modal', function () {
        $scope.loaditems();
    })
    $('#itemGridModal').on('hidden.bs.modal', function () {
        $('#itemTable').DataTable().destroy();
    })
});