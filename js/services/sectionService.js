
app.service('sectionService', function ($http, appService) {
    var apiURL = appService.baseURL + '/section/';

    this.save = function (code, name) {
        var data = {
            code: code,
            name: name
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});