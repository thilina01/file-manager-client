
app.service('workCenterService', function ($http, appService) {
    var apiURL = appService.baseURL + 'workCenters/';

    this.save = function (workCenter) {
        return  $http.post(apiURL, workCenter, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});