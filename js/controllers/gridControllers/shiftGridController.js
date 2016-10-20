
app.controller('shiftGridController', function ($http, $scope, $cookies, shiftService, appService) {

    $scope.shifts = '';

    $scope.loadShifts = function () {
        shiftService.getAll().then(function (response) {
            $scope.shifts = response.data;

            var x = $('#shiftTable').DataTable({
                data: $scope.shifts,
                columns: [
                    {data: 'shift'},
                ]
            });
        });
    }

    $('#shiftGridModal').on('shown.bs.modal', function () {
        $scope.loadShifts();
    })
    $('#shiftGridModal').on('hidden.bs.modal', function () {
        $('#shiftTable').DataTable().destroy();
    })
});