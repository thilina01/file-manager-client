
app.service('productTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'productType/';

    this.save = function (code, type) {
        var data = {
            code: code,
            type: type,

        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});