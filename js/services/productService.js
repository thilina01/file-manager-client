
app.service('productService', function ($http, appService) {
    var apiURL = appService.baseURL + 'products/';

    this.save = function (code, type, description) {
        var data = {
            code: code,
            type: type,
            description: description
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
    
    
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});