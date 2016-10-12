
app.service('qualityService', function ($http, appService) {
    var apiURL = appService.baseURL + 'qualities/';

    this.save = function (qualityDate, shift, jobNo, productCode, defectCode, defectQty, defectType, scrapCode, scrapQty, scrapType, lossCode, lossQty, lossReason) {
        var data = {
            qualityDate: qualityDate,
            shift: shift,
            jobNo: jobNo,
            productCode: productCode,
            defectCode: defectCode,
            defectQty: defectQty,
            defectType: defectType,
            scrapCode: scrapCode,
            scrapQty: scrapQty,
            scrapType: scrapType,
            lossCode: lossCode,
            lossQty: lossQty,
            lossReason: lossReason,

        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };
});