var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).when('/folder', {
        templateUrl: 'pages/folder.html',
        controller: 'folderController'
    }).when('/favicon.ico', {
        templateUrl: 'img/favicon.ico'
                //controller : 'folderController'
    })//
});
app.service('folderService', function () {
    var id = 0;

    var setId = function (newObj) {
        id = newObj;
    };

    var getId = function () {
        return id;
    };

    return {
        setId: setId,
        getId: getId
    };

});
app.controller('homeController', function ($scope, $http, $location, folderService) {
    $scope.folders = "";
    $scope.load = function () {
        $scope.errorMessage = '';
        $http.get('http://localhost:8080/folders/top').then(function (response) {
            $scope.folders = response.data;
        });
    }
    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        //$scope.folderId = $folderId;
        // alert();
        $location.path("/folder");
    }

});

app.controller('logoutController', function ($scope) {
    $scope.logout = function () {
        $scope.user = $cookies.get('myCookie');
    }
});

app.controller('folderFormController', function ($scope, $http, folderService) {
    $scope.name = '';
    $scope.description = '';

    $scope.createFolder = function () {
        //alert(folderService.getId());
        data = {
            name: $scope.name,
            description: $scope.description
        }
        if (folderService.getId() != 0) {
            data = {
                name: $scope.name,
                description: $scope.description,
                folder: {id: folderService.getId()}
            }
        }
        $http.post("http://localhost:8080/folders", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            $scope.name = '';
            $scope.description = '';
            $scope.load(); // this call is important to refresh folder list in
            // index page
            return response;
        });/**/
    }
});

app.controller('loginFormController', function ($scope, $http, $cookies) {
    $scope.email = '';
    $scope.password = '';

    $scope.login = function () {
        $http.post("http://localhost:8080/accounts/login", {
            email: $scope.email,
            password: $scope.password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            $scope.email = '';
            $scope.password = '';
            // $scope.load(); // this call is important to refresh folder list
            // in index page

            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);
            // Setting a cookie
            $cookies.put('myCookie', response.data, {
                'expires': expireDate
            });
            // Retrieving a cookie
            $scope.user = $cookies.get('myCookie');
            //alert(myCookie)

            alert($scope.user);
            return response;
        });
    }
});

app.controller('registerFormController', function ($scope, $http) {
    $scope.email = '';
    $scope.password = '';
    $scope.passwordAgain = '';

    $scope.register = function () {
        $http.post("http://localhost:8080/accounts/register", {
            email: $scope.email,
            password: $scope.password,
            passwordAgain: $scope.passwordAgain
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            $scope.email = '';
            $scope.password = '';
            $scope.passwordAgain = '';
            $scope.load(); // this call is important to refresh folder list in
            // index page
            return response;
        });
    }
});

app.controller('indexController', function ($scope, $http) {
    //$scope.user = $cookies.get('myCookie');
    $scope.folderId = 0;
});

app.controller('folderController', function ($scope, $http, $location, folderService) {
    if (folderService.getId() == 0) {
        $location.path("/");
    }
    $scope.folder = '';
    $scope.parents = [];
    //alert(folderService.getId());
    $scope.load = function () {
        //$scope.errorMessage = '';
        $http.get('http://localhost:8080/folders/' + folderService.getId() + '/with-sub-folders-and-files').then(function (response) {
            $scope.folder = response.data;
            //alert($scope.folder.name);
        });
    }

    $scope.setFolderId = function ($folderId) {
        folderService.setId($folderId);
        //$scope.folderId = $folderId;
        //alert(folderService.getId());
        $http.get('http://localhost:8080/folders/' + folderService.getId() + '/with-sub-folders-and-files').then(function (response) {
            $scope.folder = response.data;
            //alert($scope.folder.name);
        });
        $http.get('http://localhost:8080/folders/' + folderService.getId() + '/with-parent').then(function (response) {
            //$scope.parent = response.data;
            $scope.parents = [];
            pushParent(response.data);
            //alert(angular.toJson($scope.parent));
            //alert(angular.toJson($scope.parents));
        });
        //$location.path("/folder");
    }
    function pushParent($parent) {
        // some code here for all parents
        if ($parent.folder == null) {
            $scope.parents = $scope.parents.reverse();
            return;
        } else {
            $scope.parents.push($parent.folder);
            pushParent($parent.folder);

            //alert($parent.folder.name);
        }
    }
});