
app.controller('productGridController', function ($http, $scope, $cookies, productService, appService) {

    $scope.products = '';
    
    $scope.loadproducts = function () {
        productService.getAll().then(function (response) {
            $scope.products = response.data;

            var x = $('#productTable').DataTable({
                data: $scope.products,
                columns: [
                    {data: 'productCode'},
                    {data: 'productName'},
                    {data: 'description'}
                ]
            });
        });
    }

    $('#productGridModal').on('shown.bs.modal', function () {
        $scope.loadproducts();
    })
    $('#productGridModal').on('hidden.bs.modal', function () {
        $('#productTable').DataTable().destroy();
    })
});