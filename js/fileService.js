
app.service('fileService', function ($http, appService) {
    var apiURL = appService.baseURL + '/files/';
    var undefinedHeaders = appService.undefinedHeaders;
    
    this.deleteFile = function (id) {
        return $http.delete(apiURL + id);
    };
    this.uploadFile = function (formdata) {
        return $http.post(apiURL + "upload", formdata, undefinedHeaders);
    };
});