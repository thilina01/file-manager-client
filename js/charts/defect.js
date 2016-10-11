
// Load the Visualization API and the corechart package.
// google.charts.load('current', {'packages': ['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawDefectChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawDefectChart() {

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
    var options = {
        'title': 'Defect',
        'width': 400,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('defect_chart_div'));
    chart.draw(data, options);
}