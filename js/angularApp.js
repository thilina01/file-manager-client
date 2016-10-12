
google.charts.load('current', {packages: ['corechart', 'bar']});
var app = angular.module('app', ['ngRoute', 'ngCookies','ngTouch']);

app.config(function ($httpProvider, $routeProvider, $locationProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

    $routeProvider.when('/', {
        templateUrl: 'pages/home.html',
        controller: 'homeController'
    }).when('/dms', {
        templateUrl: 'pages/dms-home.html',
        controller: 'dmsHomeController'
    }).when('/folder', {
        templateUrl: 'pages/folder.html',
        controller: 'folderController'
    }).when('/kpi', {
        templateUrl: 'pages/kpi.html',
        controller: 'kpiController'
    });

});