
app.service('defectTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'defectTypes/';
this.toEdit = {};
    this.save = function (defect) {
        
        return  $http.post(apiURL, defect, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});