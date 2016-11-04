
app.service('controlPointRunManpowerService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointRunManpowers/';
    this.toEdit = {};
    this.save = function (controlPointRunManpower) {
        return  $http.post(apiURL, controlPointRunManpower, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});