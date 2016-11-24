
app.service('customerItemService', function ($http, appService) {
    var apiURL = appService.baseURL + 'customerItems/';
    this.toEdit = {};
    this.save = function (customerItem) {
        return  $http.post(apiURL, customerItem, appService.getJsonHeaders());
    };
    this.saveMany = function (customerItems) {
        return  $http.post(apiURL + 'many', customerItems, appService.getJsonHeaders());
    };
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});