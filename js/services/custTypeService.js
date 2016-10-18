
app.service('custTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'custTypes/';

    this.save = function (code, name) {
        var data = {
            code: code,
            name: name
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});