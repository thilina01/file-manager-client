
app.controller('deliveryGridController', function ($http, $scope, $cookies, deliveryService, appService) {

    $scope.deliverys = '';

    $scope.loadDeliverys = function () {
        deliveryService.getAll().then(function (response) {
            $scope.deliverys = response.data;

            
        });
    }

    $('#deliveryGridModal').on('shown.bs.modal', function () {
        $scope.loaddeliverys();
    })
    $('#deliveryGridModal').on('hidden.bs.modal', function () {
        $('#deliveryTable').DataTable().destroy();
    })
});