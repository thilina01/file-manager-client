
app.controller('productTypeGridController', function ($http, $scope, $cookies, productTypeService, appService) {

    $scope.productTypes = '';

    $scope.loadproductTypes = function () {
        productTypeService.getAll().then(function (response) {
            $scope.productTypes = response.data;

            var x = $('#productTypeTable').DataTable({
                data: $scope.productTypes,
                columns: [
                    {data: 'productCode'},
                    {data: 'productName'}

                ]
            });
        });
    }

    $('#productTypeGridModal').on('shown.bs.modal', function () {
        $scope.loadproductTypes();
    })
    $('#productTypeGridModal').on('hidden.bs.modal', function () {
        $('#productTypeTable').DataTable().destroy();
    })
});