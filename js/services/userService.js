
app.service('userService', function ($http, appService) {
    var apiURL = appService.baseURL + 'users/';
    this.toEdit = {};
    /*
     this.save = function (user) {
     return  $http.post(apiURL, user, appService.getJsonHeaders());
     };
     
     this.saveMany = function (users) {
     return  $http.post(apiURL+'many', users, appService.getJsonHeaders());
     };
     */
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    /*
     this.delete = function (id) {
     return  $http.delete(apiURL + id, appService.getJsonHeaders());
     };*/
});