app.controller('mtbfChartController', function ($scope, chartService) {

    function drawMtbfChart() {

        var startDate = $('#startMtbfDate').val();
        var endDate = $('#endMtbfDate').val();
        var duration = {startDate: startDate, endDate: endDate};

        chartService.getMtbf(duration).then(function (response) {
            chartService.drawColumnChart(response.data, 'mtbfChart_div');
        });
    }

    $scope.fill = function () {

        drawMtbfChart();
    }

    $('#mtbfChartModal').on('show.bs.modal', function () {
        drawMtbfChart();
    });

});