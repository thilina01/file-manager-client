
app.service('countryService', function ($http, appService) {
    var apiURL = appService.baseURL + 'countries/';
    this.toEdit = {};
    
    this.save = function (country) {
        return  $http.post(apiURL, country, appService.getJsonHeaders());
    };
    
    this.saveMany = function (countries) {
        return  $http.post(apiURL+'many', countries, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});