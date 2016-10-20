
app.controller('lossReasonGridController', function ($http, $scope, $cookies, lossReasonService, appService) {

    $scope.lossReasons = '';

    $scope.loadLossReasons = function () {
        lossReasonService.getAll().then(function (response) {
            $scope.lossReasons = response.data;

            var x = $('#lossReasonTable').DataTable({
                data: $scope.lossReasons,
                columns: [
                    {data: 'code'},
                    {data: 'type'},
                    {data: 'typeInSinhala'}
                ]
            });
        });
    }

    $('#lossReasonGridModal').on('shown.bs.modal', function () {
        $scope.loadLossReasons();
    })
    $('#lossReasonGridModal').on('hidden.bs.modal', function () {
        $('#lossReasonTable').DataTable().destroy();
    })
});