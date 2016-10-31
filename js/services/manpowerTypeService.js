
app.service('manpowerTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'manpowerTypes/';
this.toEdit = {};
    this.save = function (manpowerType) {
       
        return  $http.post(apiURL, manpowerType, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});