
app.controller('purchaseOrderItemGridController', function ($http, $scope, $cookies, purchaseOrderItemService, appService) {

    $scope.purchaseOrderItems = '';

    $scope.loadPurchaseOrderItems = function () {
       purchaseOrderItemService.getAll().then(function (response) {
            $scope.purchaseOrderItems = response.data;

             });
    }

    $('#purchaseOrderItemGridModal').on('shown.bs.modal', function () {
        $scope.loadPurchaseOrderItems();
    })
    $('#purchaseOrderItemGridModal').on('hidden.bs.modal', function () {
        $('#purchaseOrderItemTable').DataTable().destroy();
    })
});