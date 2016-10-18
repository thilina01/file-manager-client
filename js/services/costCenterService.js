
app.service('costCenterService', function ($http, appService) {
    var apiURL = appService.baseURL + 'costCenters/';

    this.save = function (code, name, section) {
        var data = {
            code: code,
            name: name,
            section: {id: section.id}
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});