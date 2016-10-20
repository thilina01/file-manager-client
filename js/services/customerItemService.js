
app.service('customerItemService', function ($http, appService) {
    var apiURL = appService.baseURL + 'customerItems/';

    this.save = function (customerItem) {
        return  $http.post(apiURL, customerItem, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});