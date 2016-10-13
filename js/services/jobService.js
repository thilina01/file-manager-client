
app.service('jobService', function ($http, appService) {
    var apiURL = appService.baseURL + 'jobs/';

    this.save = function (jobDate, jobNo, productCode, productType, customer, customerCode, itemDescription,
            jobQty) {
        var data = {
            jobDate: jobDate,
            jobNo: jobNo,
            productCode: productCode,
            productType: productType,
            customer: customer,
            customerCode: customerCode,
            itemDescription: itemDescription,
            jobQty: jobQty

        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };


    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});