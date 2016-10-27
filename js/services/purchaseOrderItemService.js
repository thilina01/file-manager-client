
app.service('salesOrderItemService', function ($http, appService) {
    var apiURL = appService.baseURL + 'salesOrderItems/';
this.toEdit = {};
    this.save = function (salesOrderItem) {       
        return  $http.post(apiURL, salesOrderItem, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});