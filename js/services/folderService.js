
app.service('folderService', function ($http, appService) {
    var apiURL = appService.baseURL + 'folders/';

    var id = 0;
    this.setId = function (newObj) {
        id = newObj;
    };

    this.getId = function () {
        return id;
    };

    this.getTopLevelFolders = function () {
        return $http.get(apiURL + 'top', appService.getJsonHeaders());
    };
    this.getFoldersWithParent = function () {
        return $http.get(apiURL + id + '/with-parent');
    };
    this.getFoldersWithSubFoldersAndFiles = function () {
        return $http.get(apiURL + id + '/with-sub-folders-and-files');
    };
    this.createFolder = function (data) {
        return $http.post(apiURL, data, appService.getJsonHeaders());
    };
});