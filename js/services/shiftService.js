
app.service('shiftService', function ($http, appService) {
    var apiURL = appService.baseURL + 'shifts/';
this.toEdit = {};
    this.save = function (shift) {
        return  $http.post(apiURL, shift, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});