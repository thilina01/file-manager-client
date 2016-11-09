
app.service('controlPointService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPoints/';
    this.toEdit = {};
    
    this.save = function (controlPoint) {
        return  $http.post(apiURL, controlPoint, appService.getJsonHeaders());
    };

    this.saveMany = function (controlPoints) {
        return  $http.post(apiURL + 'many', controlPoints, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
    
});