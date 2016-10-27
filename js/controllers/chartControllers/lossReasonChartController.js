app.controller('lossReasonChartController', function ($scope, $timeout, $cookies, accountService, appService, lossReasonService) {

    function drawLossChart() {

        var data = google.visualization.arrayToDataTable([
            ['Loss Reason', 'Loss Pcs', ],
            ['LR1', 8175000],
            ['LR3', 3792000],
            ['LR5', 2695000],
            ['LR6', 2099000],
            ['LR15', 1526000]
        ]);

        var options = {
            title: 'Loss',
            animation: {
                duration: 5000,
                easing: 'out',
                "startup": true
            },
            chartArea: {width: '50%'},
            hAxis: {
                title: 'Loss Pcs',
                minValue: 0
            },
            vAxis: {
                title: 'Loss Reason'
            }
        };

        var chart = new google.visualization.BarChart(document.getElementById('loss_chart_div'));

        chart.draw(data, options);
    }
    $('#lossReasonChartModal').on('show.bs.modal', function () {
        drawLossChart();
    });

});