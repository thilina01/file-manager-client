
app.service('itemService', function ($http, appService) {
    var apiURL = appService.baseURL + 'items/';
this.toEdit = {};
    this.save = function (item) {
        
        return  $http.post(apiURL, item, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});