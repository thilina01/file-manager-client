
app.controller('jobGridController', function ($http, $scope, $cookies, jobService, appService) {

    $scope.jobs = '';

    $scope.loadjobs = function () {
        jobService.getAll().then(function (response) {
            $scope.jobs = response.data;

            
        });
    }

    $('#jobGridModal').on('shown.bs.modal', function () {
        $scope.loadjobs();
    })
    $('#jobGridModal').on('hidden.bs.modal', function () {
        $('#jobTable').DataTable().destroy();
    })
});