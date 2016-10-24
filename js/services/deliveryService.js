
app.service('deliveryService', function ($http, appService) {
    var apiURL = appService.baseURL + 'deliverys/';

    this.save = function (delivery) {       
        return  $http.post(apiURL, delivery, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});