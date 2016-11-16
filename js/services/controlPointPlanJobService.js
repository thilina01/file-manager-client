
app.service('controlPointPlanJobService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointPlanJobs/';
    this.toEdit = {};
    this.save = function (controlPointPlanJob) {
        return  $http.post(apiURL, controlPointPlanJob, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});