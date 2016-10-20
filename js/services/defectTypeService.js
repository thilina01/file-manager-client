
app.service('defectTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'defectTypes/';

    this.save = function (code, type, typeInSinhala) {
        var data = {
            code: code,
            type: type,
            typeInSinhala: typeInSinhala
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});