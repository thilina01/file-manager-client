
app.controller('purchaseOrderGridController', function ($http, $scope, $cookies, purchaseOrderService, appService) {

    $scope.purchaseOrders = '';

    $scope.loadPurchaseOrders = function () {
        purchaseOrderService.getAll().then(function (response) {
            $scope.purchaseOrders = response.data;
            var x = $('#purchaseOrderTable').DataTable({
                data: $scope.purchaseOrders,
                columns: [
                    {data: 'poNumber'},
                    {data: 'orderReceivedDate'},
                    {data: 'actualDispatchedDate'},
                    {data: 'purchaseOrderType.type'},
                    {data: 'customer.name'}
                ]
            });

        });
    }

    $('#purchaseOrderGridModal').on('shown.bs.modal', function () {
        $scope.loadPurchaseOrders();
    })
    $('#purchaseOrderGridModal').on('hidden.bs.modal', function () {
        $('#purchaseOrderTable').DataTable().destroy();
    })
});