app.controller('defectTypeChartController', function ($scope, chartService) {
    /*
     function drawChart() {
     
     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Topping');
     data.addColumn('number', 'Slices');
     data.addRows([
     ['D1', 3],
     ['D2', 1],
     ['D3', 1],
     ['D4', 1],
     ['D5', 2]
     ]);
     
     // Set chart options
     var options = {'title':'Defect',
     'width':400,
     'height':300};
     
     // Instantiate and draw our chart, passing in some options.
     var chart = new google.visualization.PieChart(document.getElementById('defectTypeChart_div'));
     chart.draw(data, options);
     }
     */
    function drawChart() {
        
         var startDate = $('#startDate1').val();
         var endDate = $('#endDate1').val();
         var duration = {startDate: startDate, endDate: endDate};
         
        chartService.getX(duration).then(function (response) {
            chartService.drawPieChart(response.data, 'defectTypeChart_div');
        });
    }

    $scope.fill = function () {
        drawChart();
    }
    $('#defectTypeChartModal').on('show.bs.modal', function () {
        drawChart();
    });

});