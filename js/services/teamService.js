
app.service('teamService', function ($http, appService) {
    var apiURL = appService.baseURL + 'teams/';
    this.toEdit = {};
    this.save = function (team) {
        return  $http.post(apiURL, team, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});