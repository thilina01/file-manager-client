
app.controller('purchaseOrderTypeGridController', function ($http, $scope, $cookies, purchaseOrderTypeService, appService) {

    $scope.purchaseOrderTypes = '';

    $scope.loadpurchaseOrderTypes = function () {
        purchaseOrderTypeService.getAll().then(function (response) {
            $scope.purchaseOrderTypes = response.data;
            var x = $('#purchaseOrderTypeTable').DataTable({
                data: $scope.purchaseOrderTypes,
                columns: [
                    {data: 'code'},
                    {data: 'type'}

                ]
            });
        });
    }

    $('#purchaseOrderTypeGridModal').on('show.bs.modal', function () {
        $scope.loadpurchaseOrderTypes();
    })
    $('#purchaseOrderTypeGridModal').on('hidden.bs.modal', function () {
        $('#purchaseOrderTypeTable').DataTable().destroy();
    })
});