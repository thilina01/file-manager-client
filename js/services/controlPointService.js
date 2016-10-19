
app.service('controlPointService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPoints/';

    this.save = function (controlPoint) {
        
        return  $http.post(apiURL,controlPoint, appService.getJsonHeaders());
    };
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});