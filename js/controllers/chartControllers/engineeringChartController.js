app.controller('engineeringChartController', function ($scope, chartService) {

    function getDuration() {
        var startDate = $('#engineeringChartStartDate').val();
        var endDate = $('#engineeringChartEndDate').val();
        return {startDate: startDate, endDate: endDate};
    }

    $scope.fillMttr = function () {
        chartService.getMttr(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'engineeringChart_div');
        });
    }

    $scope.fillMtbf = function () {
        chartService.getMtbf(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'engineeringChart_div');
        });
    }

    $scope.fillMdt = function () {
        chartService.getMdt(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'engineeringChart_div');
        });
    }

    $('#engineeringChartModal').on('show.bs.modal', function () {
        //drawChart();
    });

});