
app.service('productionService', function ($http, appService) {
    var apiURL = appService.baseURL + 'production/';

    this.save = function (date, shift, controlPointCode, controlPointName, productionJobNo, productionQuantity, qualityJobNo, reason, code, qualityQuantity, maintenanceJobNo, machineNo, noOfBreakdown, machinerunningTime, hrJobNo, company, contract, help, other) {
        var data = {
            date: date,
            shift: shift,
            controlPointCode: controlPointCode,
            controlPointName: controlPointName,
            productionJobNo: productionJobNo,
            productionQuantity: productionQuantity,
            qualityJobNo: qualityJobNo,
            reason: reason,
            code: code,
            qualityQuantity: qualityQuantity,
            maintenanceJobNo: maintenanceJobNo,
            machineNo: machineNo,
            noOfBreakdow: noOfBreakdown,
            machinerunningTime: machinerunningTime,
            hrJobNo: hrJobNo,
            company: company,
            contract: contract,
            help: help,

            other: other

        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});