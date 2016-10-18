
app.service('scrapTypeService', function ($http, appService) {
    var apiURL = appService.baseURL + 'scrapTypes/';

    this.save = function (code, type, typeInShinhala) {
        var data = {
            code: code,
            type: type,
            typeInShinhala: typeInShinhala
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});