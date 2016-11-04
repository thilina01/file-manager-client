
app.service('controlPointRunLossService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointRunLosss/';
    this.toEdit = {};
    this.save = function (controlPointRunLoss) {
        return  $http.post(apiURL, controlPointRunLoss, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});