
app.service('itemMachineService', function ($http, appService) {
    var apiURL = appService.baseURL + 'itemMachines/';
    this.toEdit = {};
    
    this.save = function (itemMachine) {
        return  $http.post(apiURL,itemMachine, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});