app.controller('scheduleAdhereanceChartController', function () {

    function drawScheduleAdhereanceChart() {

      
        var data = google.visualization.arrayToDataTable([
          ['Control Point', 'Schedule Adhereance'],
          ['CP-32', 1000],
          ['CP-33', 1170],
          ['CP-34', 660],
          
        ]);
        
      var options = {animation:{
        duration: 1000,
        easing: 'out',"startup": true
      },
        title: 'Schedule Adhereance',
        hAxis: {
          title: 'Control Point',
          format: '',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'Schedule Adhereance'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('scheduleAdhereanceChart_div'));

      chart.draw(data, options);
    }
$('#scheduleAdhereanceChartModal').on('show.bs.modal', function () {
        drawScheduleAdhereanceChart();
    });

});