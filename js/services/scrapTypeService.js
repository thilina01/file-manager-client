
app.service('scrapTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'scrapTypes/';

    this.save = function (scrapType) {
       
        return  $http.post(apiURL, scrapType, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});