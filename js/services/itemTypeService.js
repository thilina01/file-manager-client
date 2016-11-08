
app.service('itemTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'itemTypes/';
    this.toEdit = {};
    
    this.save = function (itemType) {
        return  $http.post(apiURL, itemType, appService.getJsonHeaders());
    };

    this.saveMany = function (itemTypes) {
        return  $http.post(apiURL + 'many', itemTypes, appService.getJsonHeaders());
    };
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});