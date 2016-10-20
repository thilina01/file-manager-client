
app.service('shiftService', function ($http, appService) {
    var apiURL = appService.baseURL + 'shifts/';

    this.save = function (shift) {
        return  $http.post(apiURL, shift, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});