
app.service('defectService', function ($http, appService) {
    var apiURL = appService.baseURL + 'defect/';

    this.save = function (code,type,typeInShinhala) {
        var data = {
            code: code,
            type: type,
            typeInShinhala: typeInShinhala
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});