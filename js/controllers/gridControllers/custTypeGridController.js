
app.controller('custTypeGridController', function ($http, $scope, $cookies, custTypeService, appService) {

    $scope.custTypes = '';

    $scope.loadcustTypes = function () {
        custTypeService.getAll().then(function (response) {
            $scope.custTypes = response.data;

            var x = $('#custTypeTable').DataTable({
                data: $scope.custTypes,
                columns: [
                    {data: 'code'},
                    {data: 'name'}
                ]
            });
        });
    }

    $('#custTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadcustTypes();
    })
    $('#custTypeGridModal').on('hidden.bs.modal', function () {
        $('#custTypeTable').DataTable().destroy();
    })
});