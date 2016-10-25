
app.service('paintService', function ($http, appService) {
    var apiURL = appService.baseURL + 'paints/';
this.toEdit = {};
    this.save = function (paint) {
        return  $http.post(apiURL, paint, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});