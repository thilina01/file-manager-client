
app.service('productTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'productTypes/';

    this.save = function (code, type) {
        var data = {
            code: code,
            type: type,

        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});