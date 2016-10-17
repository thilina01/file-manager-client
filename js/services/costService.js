
app.service('costService', function ($http, appService) {
    var apiURL = appService.baseURL + 'costs/';

    this.save = function (code, name) {
        var data = {
            code: code,
            price: price
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});