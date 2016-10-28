
app.service('appService', function ($cookies) {
    this.baseURL = 'http://192.168.1.99:8080/';//http://trw.nanosl.com:82///tmsapi.trwlanka.com
    this.clientBaseURL = 'http://localhost/file-manager-client';//'http://trw.nanosl.com:81/'//http://localhost/file-manager-client
    this.organization = 'TRW Lanka (Pvt) Ltd.';
    this.appName = 'TRW Management System';
    this.email = $cookies.get("email") != undefined ? $cookies.get("email") : "";

    this.getJsonHeaders = function () {
        return {
            headers: {
                'Content-Type': 'application/json',
                'email': this.email
            }
        }
    };

    this.getUndefinedHeaders = function () {
        return {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined,
                'email': this.email
            }
        }
    };

    this.setEmail = function (email) {
        this.email = email;
        $cookies.put("email", email);
    };

});