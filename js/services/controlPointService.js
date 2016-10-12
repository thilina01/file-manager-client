
app.service('controlPointService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPoints/';

    this.save = function (code, name, wcc, section) {
        var data = {
            code: code,
            name: name,
            wcc: wcc,
            section: section
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
    
    
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});