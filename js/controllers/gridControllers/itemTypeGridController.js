
app.controller('itemTypeGridController', function ($http, $scope, $cookies, itemTypeService, appService) {

    $scope.itemTypes = '';

    $scope.loaditemTypes = function () {
        itemTypeService.getAll().then(function (response) {
            $scope.itemTypes = response.data;
            var x = $('#itemTypeTable').DataTable({
                data: $scope.itemTypes,
                columns: [
                    {data: 'code'},
                    {data: 'type'}

                ]
            });
        });
    }

    $('#itemTypeGridModal').on('shown.bs.modal', function () {
        $scope.loaditemTypes();
    })
    $('#itemTypeGridModal').on('hidden.bs.modal', function () {
        $('#itemTypeTable').DataTable().destroy();
    })
});