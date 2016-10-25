
app.service('breakdownService', function ($http, appService) {
    var apiURL = appService.baseURL + 'breakdowns/';

    this.save = function (breakdown) {
        return  $http.post(apiURL, breakdown, appService.getJsonHeaders());
    };
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});