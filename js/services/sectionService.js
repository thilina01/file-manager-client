
app.service('sectionService', function ($http, appService) {
    var apiURL = appService.baseURL + 'sections/';
this.toEdit = {};
    this.save = function (section) {
       
        return  $http.post(apiURL, section, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});