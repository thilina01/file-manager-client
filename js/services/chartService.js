
app.service('chartService', function ($http, appService) {
    var apiURL = appService.baseURL + 'charts/';
    var animation = {
        duration: 1000,
        easing: 'out', "startup": true
    };
    /*
     this.draw = function (elementId, dataArray, options) {
     var dataTable = google.visualization.arrayToDataTable(dataArray);
     var chart = new google.visualization.ColumnChart(document.getElementById(elementId));
     chart.draw(dataTable, options);
     };
     this.drawColumnChart = function (data, elementId) {
     
     var options = {
     animation: animation,
     hAxis: {title: data.hTitle},
     vAxis: {title: data.vTitle}
     };
     
     var dataTable = new google.visualization.DataTable();
     var columns = data.columns;
     for (var i = 0; i < columns.length; i++) {
     dataTable.addColumn(columns[i].type, columns[i].name);
     }
     dataTable.addRows(data.rows);
     var chart = new google.visualization.ColumnChart(document.getElementById(elementId));
     chart.draw(dataTable, options);
     };
     */

    this.drawColumnChart = function (data, elementId) {

        var options = {
            animation: animation,
            hAxis: {title: data.htitle},
            vAxis: {title: data.vtitle},
            //title: 'How Much Pizza I Ate Last Night',
            width: window.innerWidth - (window.innerWidth / 5),
            height: window.innerHeight - (window.innerHeight / 3)
        };

        var dataTable = new google.visualization.arrayToDataTable(data.dataArray);
        var chart = new google.visualization.ColumnChart(document.getElementById(elementId));
        chart.draw(dataTable, options);
    };

    this.drawPieChart = function (data, elementId) {

        var options = {
            width: window.innerWidth - (window.innerWidth / 5),
            height: window.innerHeight - (window.innerHeight / 3),
            is3D: true
                    //pieHole: 0.2
        };

        var dataTable = new google.visualization.arrayToDataTable(data.dataArray);
        var chart = new google.visualization.PieChart(document.getElementById(elementId));
        chart.draw(dataTable, options);
    };

    this.getMtbf = function (duration) {
        return $http.post(apiURL + "mtbf", duration, appService.getJsonHeaders());
    };

    this.getMttr = function (duration) {
        return $http.post(apiURL + "mttr", duration, appService.getJsonHeaders());
    };
    
    this.getMdt = function (duration) {
        return $http.post(apiURL + "mdt", duration, appService.getJsonHeaders());
    };

    this.getX = function (duration) {
        return $http.post(apiURL + "x", duration, appService.getJsonHeaders());
    };

    this.getAttendance = function (duration) {
        return $http.post(apiURL + "attendance", duration, appService.getJsonHeaders());
    };

    this.getScheduleAdherence = function (duration) {
        return $http.post(apiURL + "scheduleAdherence", duration, appService.getJsonHeaders());
    };
});