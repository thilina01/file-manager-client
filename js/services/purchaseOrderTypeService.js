
app.service('purchaseOrderTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'purchaseOrderTypes/';
this.toEdit = {};
    this.save = function (purchaseOrderType) {
        
        return  $http.post(apiURL, purchaseOrderType, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});