
app.service('controlPointService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPoint/';

    this.save = function (code, name, wcc, section) {
        var data = {
            code: code,
            name: name,
            wcc: wcc,
            section: section
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});