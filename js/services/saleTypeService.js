
app.service('saleTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'saleTypes/';
     this.toEdit = {};
    this.save = function (saleType) {
        
        return  $http.post(apiURL, saleType, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});