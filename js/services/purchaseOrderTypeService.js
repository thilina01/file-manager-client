
app.service('purchaseOrderTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'purchaseOrderTypes/';

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