
app.service('costCenterService', function ($http, appService) {
    var apiURL = appService.baseURL + 'costCenters/';
    this.toEdit = {};
    this.save = function (costCenter) {
        return  $http.post(apiURL, costCenter, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});