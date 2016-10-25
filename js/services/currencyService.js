
app.service('currencyService', function ($http, appService) {
    var apiURL = appService.baseURL + 'currencies/';
    this.toEdit = {};
    this.save = function (currency) {
        return  $http.post(apiURL, currency, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
     this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});