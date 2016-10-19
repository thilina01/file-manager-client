
app.service('paintService', function ($http, appService) {
    var apiURL = appService.baseURL + 'paints/';

    this.save = function (paint) {
        return  $http.post(apiURL, paint, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});