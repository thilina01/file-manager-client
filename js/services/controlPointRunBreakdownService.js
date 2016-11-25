
app.service('controlPointRunBreakdownService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointRunBreakdowns/';
    this.toEdit = {};
    this.save = function (controlPointRunBreakdown) {
        return  $http.post(apiURL, controlPointRunBreakdown, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});