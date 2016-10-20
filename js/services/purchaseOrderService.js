
app.service('purchaseOrderService', function ($http, appService) {
    var apiURL = appService.baseURL + 'jobs/';

    this.save = function (purchaseOrder) {       
        return  $http.post(apiURL, purchaseOrder, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});