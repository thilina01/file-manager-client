
app.service('sectionService', function ($http, appService) {
    var apiURL = appService.baseURL + 'sections/';

    this.save = function (section) {
       
        return  $http.post(apiURL, section, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});