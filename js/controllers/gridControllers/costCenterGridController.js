
app.controller('costCenterGridController', function ($http, $scope, $cookies, costCenterService, appService) {

    $scope.costCenters = '';

    $scope.loadCostCenters = function () {
        costCenterService.getAll().then(function (response) {
            $scope.costCenters = response.data;
            
            
            var x = $('#costCenterTable').DataTable({
                data: $scope.costCenters,
                columns: [
                    {data: 'code'},
                    {data: 'name'},
                    {data: 'section.code'}
                ]
            });
          
        });
    }

    $('#costCenterGridModal').on('show.bs.modal', function () {
        $scope.loadCostCenters();
    })
    $('#costCenterGridModal').on('hidden.bs.modal', function () {
        $('#costCenterTable').DataTable().destroy();
    })
});