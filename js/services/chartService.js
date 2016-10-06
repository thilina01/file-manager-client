
app.service('chartService', function () {
    this.draw = function (elementId, dataArray, options) {
        var dataTable = google.visualization.arrayToDataTable(dataArray);
        var chart = new google.visualization.ColumnChart(document.getElementById(elementId));
        chart.draw(dataTable, options);
    };
});