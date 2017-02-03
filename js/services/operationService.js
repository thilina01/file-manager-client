
app.service('operationService', function ($http, appService) {
    var apiURL = appService.baseURL + 'operations/';
    this.toEdit = {};
    this.save = function (operation) {
        return  $http.post(apiURL, operation, appService.getJsonHeaders());
    };

    this.saveMany = function (operations) {
        return  $http.post(apiURL+'many', operations, appService.getJsonHeaders());
    };
    
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };

    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});