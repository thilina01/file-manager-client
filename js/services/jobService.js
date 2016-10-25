
app.service('jobService', function ($http, appService) {
    var apiURL = appService.baseURL + 'jobs/';
this.toEdit = {};
    this.save = function (job) {       
        return  $http.post(apiURL, job, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});