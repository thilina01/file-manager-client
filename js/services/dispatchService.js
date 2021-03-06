
app.service('dispatchService', function ($http, appService) {
    var apiURL = appService.baseURL + 'dispatches/';
    this.toEdit = {};

    this.save = function (dispatch) {
        return  $http.post(apiURL, dispatch, appService.getJsonHeaders());
    };

    this.saveMany = function (dispatchs) {
        return  $http.post(apiURL + 'many', dispatchs, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.getToEdit = function () {
        return $http.get(apiURL + this.toEdit.id, appService.getJsonHeaders());
    };

    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});