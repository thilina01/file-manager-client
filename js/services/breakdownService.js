
app.service('breakdownService', function ($http, appService) {
    var apiURL = appService.baseURL + 'breakdowns/';

    this.save = function (breakdownDate, shift, jobNo, controlPoint, machine, numberOfBreakdown,
            breakdownTime) {
        var data = {
            breakdownDate: breakdownDate,
            shift: shift,
            jobNo: jobNo,
            controlPoint: controlPoint,
            machine: machine,
            numberOfBreakdown: numberOfBreakdown,
            breakdownTime: breakdownTime
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});