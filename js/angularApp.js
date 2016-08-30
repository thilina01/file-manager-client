var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).when('/folder', {
        templateUrl: 'pages/folder.html',
        controller: 'folderController'
    })
});