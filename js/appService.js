
app.service('appService', function ($cookies) {
    this.baseURL = 'http://trw.nanosl.com:82/';
    this.clientBaseURL = 'http://trw.nanosl.com:81/';
    this.organization = 'TRW Lanka (Pvt) Ltd.';
    this.appName = 'Document Management System';
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