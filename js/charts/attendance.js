
//google.charts.load('current', {packages: ['corechart', 'bar']});
//google.charts.setOnLoadCallback(drawAttendanceChart);

function drawAttendanceChart() {

    var data = google.visualization.arrayToDataTable([
        ['Control Point', 'Company', 'Contract'],
        ['CP-32', 10, 4],
        ['CP-33', 11, 6],
        ['CP-34', 6, 11]
    ]);

    var options = {
        animation: {
            duration: 1000,
            easing: 'out',
            "startup": true
        },
        title: 'Attendance',
        hAxis: {
            title: 'Control Point',
            format: '',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: ''
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('attendance_chart_div'));

    chart.draw(data, options);
}