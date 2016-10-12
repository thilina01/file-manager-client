
app.service('planningService', function ($http, appService) {
    var apiURL = appService.baseURL + 'plannings/';

    this.save = function (planningDate, shift, jobNo, controlPoint, controlPointName, wcc, section, planQty, company, contract, help, other) {
        var data = {
            planningDate: planningDate,
            shift: shift,
            jobNo: jobNo,
            controlPoint: controlPoint,
            controlPointName: controlPointName,
            wcc: wcc,
            section: section,
            planQty: planQty,
            company: company,
            contract: contract,
            help: help,
            other: other

        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});