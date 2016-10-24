
app.service('purchaseOrderItemsService', function ($http, appService) {
    var apiURL = appService.baseURL + 'purchaseOrderItems/';

    this.save = function (purchaseOrderItem) {       
        return  $http.post(apiURL, purchaseOrderItem, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});