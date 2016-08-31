
app.service('accountService', function ($http, appService) {
    var apiURL = appService.baseURL + '/accounts/';
    var jsonHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    this.login = function (email, password) {
        var data = {
            email: email,
            password: password
        };
        return  $http.post(apiURL + "login", data, jsonHeaders);
    };

    this.register = function (email, password, passwordAgain) {
        var data = {
            email: email,
            password: password,
            passwordAgain: passwordAgain
        };
        return $http.post(apiURL + "register", data, jsonHeaders);
    };
});