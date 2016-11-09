
app.service('controlPointRunService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointRuns/';
    this.toEdit = {};
    
    this.save = function (controlPointRun) {
        return  $http.post(apiURL, controlPointRun, appService.getJsonHeaders());
    };
    
    this.saveMany = function (controlPointRuns) {
        return  $http.post(apiURL + 'many', controlPointRuns, appService.getJsonHeaders());
    };
    
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});