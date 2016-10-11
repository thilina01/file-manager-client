
app.service('scrapService', function ($http, appService) {
    var apiURL = appService.baseURL + 'scrap/';

    this.save = function (code, type, typeInShinhala) {
        var data = {
            code: code,
            type: type,
            typeInShinhala: typeInShinhala
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});