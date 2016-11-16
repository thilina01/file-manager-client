
app.service('controlPointPlanManpowerService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointPlanManpowers/';
    this.toEdit = {};
    this.save = function (controlPointPlanManpower) {
        return  $http.post(apiURL, controlPointPlanManpower, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});