app.controller('mtbChartController', function ($scope, $timeout, $cookies, accountService, appService, lossReasonService) {

   function drawMtbChart() {

      
        var data = google.visualization.arrayToDataTable([
          ['Control Point', 'MTB'],
          ['CP-32', 1000],
          ['CP-33', 1170],
          ['CP-34', 660],
          
        ]);
        
      var options = {animation:{
        duration: 1000,
        easing: 'out',"startup": true
      },
        title: 'MTB',
        hAxis: {
          title: 'Control Point',
          format: '',
          viewWindow: {
            min: [7, 30, 0],
            max: [17, 30, 0]
          }
        },
        vAxis: {
          title: 'MTB'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('mtbChart_div'));

      chart.draw(data, options);
    }
 $('#mtbChartModal').on('show.bs.modal', function () {
        drawMtbChart();
    });

});