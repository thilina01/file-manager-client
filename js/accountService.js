
app.service('accountService', function ($http, appService) {
    var apiURL = appService.baseURL + '/accounts/';

    this.login = function (email, password) {
        var data = {
            email: email,
            password: password
        };
        return  $http.post(apiURL + "login", data, appService.getJsonHeaders());
    };
    this.logout = function (email) {
        var data = {
            email: email
        };
        return  $http.post(apiURL + "logout", data, appService.getJsonHeaders());
    };
    this.register = function (email, password, passwordAgain) {
        var data = {
            email: email,
            password: password,
            passwordAgain: passwordAgain
        };
        return $http.post(apiURL + "register", data, appService.getJsonHeaders());
    };
});