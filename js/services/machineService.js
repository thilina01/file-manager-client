
app.service('machineService', function ($http, appService) {
    var apiURL = appService.baseURL + 'machines/';

    this.save = function (code, name, wcc) {
        var data = {
            code: code,
            name: name,
            wcc: wcc
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});