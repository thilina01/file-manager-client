
app.service('menuService', function (appService, $http, $cookies) {

    var apiURL = appService.baseURL + '/menus/';

    this.getMenus = function () {
        return  $http.get(apiURL, appService.getJsonHeaders());
    }
    this.getMenusWithParent = function () {
        return  $http.get(apiURL+"withParent", appService.getJsonHeaders());
    }

    this.getTopMenus = function () {
        return  $http.get(apiURL + 'top', appService.getJsonHeaders());
    }

    this.saveMany = function (menus) {
        return  $http.post(apiURL + 'many', menus, appService.getJsonHeaders());
    };
});