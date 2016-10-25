
app.service('purchaseOrderService', function ($http, appService) {
    var apiURL = appService.baseURL + 'purchaseOrders/';
this.toEdit = {};
    this.save = function (purchaseOrder) {       
        return  $http.post(apiURL, purchaseOrder, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});