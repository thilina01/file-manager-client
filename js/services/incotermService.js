
app.service('incotermService', function ($http, appService) {
    var apiURL = appService.baseURL + 'incoterms/';
this.toEdit = {};
    this.save = function (incoterm) {
        
        return  $http.post(apiURL, incoterm, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});