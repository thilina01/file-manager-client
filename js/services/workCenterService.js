
app.service('workCenterService', function ($http, appService) {
    var apiURL = appService.baseURL + 'workCenters/';
    this.toEdit = {};
    
    this.save = function (workCenter) {
        return  $http.post(apiURL, workCenter, appService.getJsonHeaders());
    };

    this.saveMany = function (workCenters) {
        return  $http.post(apiURL + 'many', workCenters, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
    
});