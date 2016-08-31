
app.service('folderService', function ($http, appService) {
    var apiURL = appService.baseURL + '/folders/';
    var jsonHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var id = 0;
    this.setId = function (newObj) {
        id = newObj;
    };

    this.getId = function () {
        return id;
    };

    /* <-----------------> */
    this.getTopLevelFolders = function () {
        return $http.get(apiURL + 'top');
    };
    this.getFoldersWithParent = function () {
        return $http.get(apiURL + id + '/with-parent');
    };
    this.getFoldersWithSubFoldersAndFiles = function () {
        return $http.get(apiURL + id + '/with-sub-folders-and-files');
    };
    this.createFolder = function (data) {
        return $http.post(apiURL, data, jsonHeaders);
    };
});