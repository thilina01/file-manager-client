
app.controller('deliveryGridController', function ($http, $scope, $cookies, deliveryService, appService) {

    $scope.deliveries = '';

    $scope.loadDeliveries = function () {
        deliveryService.getAll().then(function (response) {
            $scope.deliveries = response.data;
            
             var x = $('#deliveryTable').DataTable({
                data: $scope.items,
                columns: [
                    {data: 'deliveryDate'},
                    {data: 'quantity'},
                    {data: 'location'},
                    {data: 'item.code'},
                    {data: 'purchaseOrder.poNumber'}
                ]

             });
        });
    }

    $('#deliveryGridModal').on('shown.bs.modal', function () {
        $scope.loaddeliverys();
    })
    $('#deliveryGridModal').on('hidden.bs.modal', function () {
        $('#deliveryTable').DataTable().destroy();
    })
});