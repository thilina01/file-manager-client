
app.service('salesOrderService', function ($http, appService) {
    var apiURL = appService.baseURL + 'salesOrders/';
    this.toEdit = {};
    this.save = function (salesOrder) {
        return  $http.post(apiURL, salesOrder, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});