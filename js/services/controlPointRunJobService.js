
app.service('controlPointRunJobService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointRunJobs/';
    this.toEdit = {};
    this.save = function (controlPointRunJob) {
        return  $http.post(apiURL, controlPointRunJob, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});