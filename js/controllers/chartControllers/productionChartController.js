app.controller('productionChartController', function ($scope, chartService) {

    function getDuration() {
        var startDate = $('#productionChartStartDate').val();
        var endDate = $('#productionChartEndDate').val();
        return {startDate: startDate, endDate: endDate};
    }

    $scope.test = function () {
        chartService.getX(getDuration()).then(function (response) {
            chartService.drawPieChart(response.data, 'productionChart_div');
        });
    }
    $scope.fillLossReason = function () {

    }

    $scope.fillAttendance = function () {
        chartService.getAttendance(getDuration()).then(function (response) {
            chartService.drawPieChart(response.data, 'productionChart_div');
        });
    }

    $scope.fillScheduleAdherence = function () {
        chartService.getScheduleAdherence(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'productionChart_div');
        });
    }

    $scope.fillMttr = function () {
        chartService.getMttr(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'productionChart_div');
        });
    }

    $scope.fillMtbf = function () {
        chartService.getMtbf(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'productionChart_div');
        });
    }
    
    $scope.fillMdt = function () {
        chartService.getMdt(getDuration()).then(function (response) {
            chartService.drawColumnChart(response.data, 'productionChart_div');
        });
    }
    
    $scope.defectType = function () {
        /*
         chartService.getMtbf(getDuration()).then(function (response) {
         chartService.drawColumnChart(response.data, 'productionChart_div');
         });*/
    }

    $('#productionChartModal').on('show.bs.modal', function () {
        //drawChart();
    });

});