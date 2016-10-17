
app.controller('jobGridController', function ($http, $scope, $cookies, jobService, appService) {

    $scope.jobs = '';

    $scope.loadjobs = function () {
        jobService.getAll().then(function (response) {
            $scope.jobs = response.data;

            var x = $('#jobTable').DataTable({
                data: $scope.jobs,
                columns: [
                    {data: 'jobNo'},
                    {data: 'productCode'},
                    {data: 'productType'},
                    {data: 'customer'},
                    {data: 'customerCode'},
                    {data: 'itemDescription'},
                    {data: 'jobQty'},
                ]
            });
        });
    }

    $('#jobGridModal').on('shown.bs.modal', function () {
        $scope.loadcustomers();
    })
    $('#jobGridModal').on('hidden.bs.modal', function () {
        $('#jobTable').DataTable().destroy();
    })
});