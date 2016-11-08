
app.service('customerService', function ($http, appService) {
    var apiURL = appService.baseURL + 'customers/';
    this.toEdit = {};
    this.save = function (customer) {
        return  $http.post(apiURL, customer, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});