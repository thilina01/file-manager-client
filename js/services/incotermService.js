
app.service('incotermService', function ($http, appService) {
    var apiURL = appService.baseURL + 'incoterms/';

    this.save = function (incoterm) {
        
        return  $http.post(apiURL, incoterm, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});