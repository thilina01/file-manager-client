
app.service('teamMenuService', function ($http, appService) {
    var apiURL = appService.baseURL + 'teamMenus/';
    this.toEdit = {};
    this.save = function (teamMenu) {
        return  $http.post(apiURL, teamMenu, appService.getJsonHeaders());
    };
    this.editMany = function (teamMenus) {
        return  $http.put(apiURL, teamMenus, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});