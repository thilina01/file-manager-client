
app.service('purchaseOrderItemService', function ($http, appService) {
    var apiURL = appService.baseURL + 'purchaseOrderItems/';
this.toEdit = {};
    this.save = function (purchaseOrderItem) {       
        return  $http.post(apiURL, purchaseOrderItem, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});