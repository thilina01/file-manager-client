
app.service('jobDispatchService', function ($http, appService) {
    var apiURL = appService.baseURL + 'jobDispatches/';
    this.toEdit = {};
    
    this.save = function (jobDispatch) {
        return  $http.post(apiURL, jobDispatch, appService.getJsonHeaders());
    };
    
    this.saveMany = function (jobDispatchs) {
        return  $http.post(apiURL + 'many', jobDispatchs, appService.getJsonHeaders());
    };
    
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});