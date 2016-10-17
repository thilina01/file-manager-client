
app.service('customerService', function ($http, appService) {
    var apiURL = appService.baseURL + 'customers/';

    this.save = function (code, name, officeAds, consignee, notifyParty, contact, phoneNo, fax, paymentTerm, incoterm, custtype, vatNo, sVatNo, currency, country, finalDestination, continent, note) {
        var data = {
            code: code,
            name: name,
            officeAddress: officeAddress,
            consignee: consignee,
            notifyParty: notifyParty,
            contact: contact,
            phoneNo: phoneNo,
            fax: fax,
            paymentTerm: paymentTerm,
            incoterm: incoterm,
            custtype: custtype,
            vatNo: vatNo,
            sVatNo: sVatNo,
            currency: currency,
            countr: country,
            finalDestinatio: finalDestination,
            continent: continent,
            note: note,
        };
        return  $http.post(apiURL, data, appService.getJsonHeaders());
    };

    this.getAll = function () {
        return $http.get(apiURL, appService.getJsonHeaders());
    };
});