
app.service('workCenterService', function ($http, appService) {
    var apiURL = appService.baseURL + 'workCenters/';

    this.save = function (code, name, section) {
        var data = {
            code: code,
            name: name,
            section: section
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});