
app.service('machineService', function ($http, appService) {
    var apiURL = appService.baseURL + 'machines/';

    this.save = function (machine) {
        return  $http.post(apiURL, machine, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});