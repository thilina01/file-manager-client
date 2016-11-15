
app.service('controlPointPlanService', function ($http, appService) {
    var apiURL = appService.baseURL + 'controlPointPlans/';
    this.toEdit = {};
    
    this.save = function (controlPointPlan) {
        return  $http.post(apiURL, controlPointPlan, appService.getJsonHeaders());
    };
    
    this.saveMany = function (controlPointPlans) {
        return  $http.post(apiURL + 'many', controlPointPlans, appService.getJsonHeaders());
    };
    
    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
    this.delete = function (id) {
        return  $http.delete(apiURL + id, appService.getJsonHeaders());
    };
});