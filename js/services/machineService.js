
app.service('machineService', function ($http, appService) {
    var apiURL = appService.baseURL + 'machines/';
this.toEdit = {};
    this.save = function (machine) {
        return  $http.post(apiURL, machine, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});