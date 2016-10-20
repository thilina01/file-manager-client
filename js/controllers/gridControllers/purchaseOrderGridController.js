
app.controller('purchaseOrderGridController', function ($http, $scope, $cookies, purchaseOrderService, appService) {

    $scope.purchaseOrders = '';

    $scope.loadPurchaseOrders = function () {
       purchaseOrderService.getAll().then(function (response) {
            $scope.purchaseOrders = response.data;

           
        });
    }

    $('#purchaseOrderGridModal').on('shown.bs.modal', function () {
        $scope.loadpurchaseOrders();
    })
    $('#purchaseOrderGridModal').on('hidden.bs.modal', function () {
        $('#purchaseOrderTable').DataTable().destroy();
    })
});