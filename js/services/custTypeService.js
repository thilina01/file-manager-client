
app.service('custTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'custTypes/';

    this.save = function (custType) {
        
        return  $http.post(apiURL, custType, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});