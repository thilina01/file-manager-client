
app.service('energyService', function ($http, appService) {
    var apiURL = appService.baseURL + 'energy/';

    this.save = function (energyDate, shift, jobNo, machineNo, consumptionRate) {
        var data = {
            energyDate: energyDate,
            shift: shift,
            jobNo: jobNo,
            machineNo: machineNo,
            consumptionRate: consumptionRate
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});