
app.service('statusService', function ($http, appService) {
    var apiURL = appService.baseURL + 'statuses/';
    this.toEdit = {};
    this.save = function (status) {
        return  $http.post(apiURL, status, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});