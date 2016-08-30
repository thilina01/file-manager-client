
app.service('folderService', function () {
    var id = 0;
    this.setId = function (newObj) {
        id = newObj;
    };

    this.getId = function () {
        return id;
    };
    /*
     return {
     setId: setId,
     getId: getId
     };
     */
});