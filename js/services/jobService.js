
app.service('jobService', function ($http, appService) {
    var apiURL = appService.baseURL + 'jobs/';

    this.save = function (job) {       
        return  $http.post(apiURL, job, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});