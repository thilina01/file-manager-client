
//google.charts.load('current', {packages: ['corechart', 'bar']});
//google.charts.setOnLoadCallback(drawDefectsAndScrapsChart);

function drawDefectsAndScrapsChart() {

    var data = google.visualization.arrayToDataTable([
        ['Control Point', 'Defects', 'Scrap'],
        ['CP-32', 1000, 400],
        ['CP-33', 1170, 460],
        ['CP-34', 660, 1120],
    ]);

    var options = {
        animation: {
            duration: 1000,
            easing: 'out',
            "startup": true
        },
        title: 'Defects & Scrap',
        hAxis: {
            title: 'Control Point',
            format: '',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: 'Pcs'
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('defects_and_scraps_chart_div'));

    chart.draw(data, options);
}