
app.service('currencyService', function ($http, appService) {
    var apiURL = appService.baseURL + 'currencies/';

    this.save = function (currency) {
        return  $http.post(apiURL, currency, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});