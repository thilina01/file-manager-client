
app.service('menuService', function (appService, $http, $cookies) {

    var apiURL = appService.baseURL + '/menus/';
    this.getMenus = function () {
        /*var data = {
            email: $cookies.get('email')
        };*/
        return  $http.get(apiURL, appService.getJsonHeaders());
    }
});