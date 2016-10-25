
app.service('custTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'custTypes/';
     this.toEdit = {};
    this.save = function (custType) {
        
        return  $http.post(apiURL, custType, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});