
app.service('productionService', function ($http, appService) {
    var apiURL = appService.baseURL + 'productions/';
    this.toEdit = {};
    this.save = function (production) {
        return  $http.post(apiURL, production, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});