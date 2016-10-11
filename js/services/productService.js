
app.service('productService', function ($http, appService) {
    var apiURL = appService.baseURL + 'product/';

    this.save = function (code, type, description) {
        var data = {
            code: code,
            type: type,
            description: description
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});