var app = angular.module('app', ['ngRoute', 'ngCookies']);

app.config(function ($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.useXDomain = true;    
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
    
    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).when('/#', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).when('/folder', {
        templateUrl: 'pages/folder.html',
        controller: 'folderController'
    });

});