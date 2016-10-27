app.controller('scrapTypeChartController', function () {
    
    function drawScrapTypeChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
            ['S1', 3],
            ['S22', 1],
            ['S3', 1],
            ['S4', 1],
            ['S5', 2]
        ]);

        // Set chart options
        var options = {'title': 'Scrap',
            'width': 400,
            'height': 300};

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('scrapTypeChart_div'));
        chart.draw(data, options);
    }
    $('#scrapTypeChartModal').on('show.bs.modal', function () {
        drawScrapTypeChart();
    });

});