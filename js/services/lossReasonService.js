
app.service('lossReasonService', function ($http, appService) {
    var apiURL = appService.baseURL + 'lossReasons/';

    this.save = function (lossReason) {
        
        return  $http.post(apiURL,lossReason, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});