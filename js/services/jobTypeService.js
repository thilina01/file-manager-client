
app.service('jobTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'jobTypes/';
this.toEdit = {};
    this.save = function (jobType) {
        
        return  $http.post(apiURL, jobType, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});