
app.service('customerJobService', function ($http, appService) {
    var apiURL = appService.baseURL + 'customerJobs/';
    this.toEdit = {};
    this.save = function (customerJob) {
        return  $http.post(apiURL, customerJob, appService.getJsonHeaders());
    };
    this.saveMany = function (customerJobs) {
        return  $http.post(apiURL + 'many', customerJobs, appService.getJsonHeaders());
    };
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});