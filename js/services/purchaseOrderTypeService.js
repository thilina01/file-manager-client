
app.service('purchaseOrderTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'purchaseOrderTypes/';

    this.save = function (purchaseOrderType) {
        
        return  $http.post(apiURL, purchaseOrderType, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});