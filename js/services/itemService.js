
app.service('itemService', function ($http, appService) {
    var apiURL = appService.baseURL + 'items/';

    this.save = function (item) {
        
        return  $http.post(apiURL, item, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});