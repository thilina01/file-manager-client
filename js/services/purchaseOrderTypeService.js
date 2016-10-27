
app.service('salesOrderTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'salesOrderTypes/';
this.toEdit = {};
    this.save = function (salesOrderType) {
        
        return  $http.post(apiURL, salesOrderType, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});