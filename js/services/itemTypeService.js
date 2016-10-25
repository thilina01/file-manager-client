
app.service('itemTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'itemTypes/';

    this.save = function (itemType) {
       
        return  $http.post(apiURL,itemType, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});