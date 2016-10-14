
app.service('shiftService', function ($http, appService) {
    var apiURL = appService.baseURL + 'shifts/';

    this.save = function (shift) {
        var data = {
            shift: shift
           
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});