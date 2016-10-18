
app.controller('customerFormController', function ($scope, $cookies, accountService, appService, custTypeService, customerService, incotermService, currencyService,countryService) {
    $scope.code = '';
    $scope.name = '';
    $scope.officeAddress = '';
    $scope.consignee = '';
    $scope.notifyParty = '';
    $scope.contact = '';
    $scope.phoneNo = '';
    $scope.fax = '';
    $scope.paymentTerm = '';
    $scope.incoterm = '';
    $scope.custType = '';
    $scope.vatNo = '';
    $scope.sVatNo = '';
    $scope.currency = '';
    $scope.country = '';
    $scope.finalDestination = '';
    $scope.continent = '';
    $scope.note = '';

    $scope.incoterms = '';
    $scope.custTypes = '';
    $scope.currencies = '';
     $scope.countries = '';



    $scope.clear = function () {
       $scope.showSuccess("saved");
        $scope.code = '';
        $scope.name = '';
        $scope.officeAddress = '';
        $scope.consignee = '';
        $scope.notifyParty = '';
        $scope.contact = '';
        $scope.phoneNo = '';
        $scope.fax = '';
        $scope.paymentTerm = '';
        $scope.incoterm = '';
        $scope.custType = '';
        $scope.vatNo = '';
        $scope.sVatNo = '';
        $scope.currency = '';
        $scope.country = '';
        $scope.finalDestination = '';
        $scope.continent = '';
        $scope.note = '';
    }

    $scope.isValid = function () {
        if ($scope.code == '' || $scope.name == '' || $scope.officeAddress == '' || $scope.consignee == '' || $scope.notifyParty == '' || $scope.contact == '' ||
                $scope.phoneNo == '' || $scope.fax == '' || $scope.paymentTerm == '' || $scope.incoterm == '' || $scope.custType == '' || $scope.vatNo == '' ||
                $scope.sVatNo == '' || $scope.currency == '' || $scope.country == '' || $scope.finalDestination == '' || $scope.continent == '' || $scope.note == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        customerService.save($scope.code, $scope.name, $scope.consignee, $scope.notifyParty, $scope.contact, $scope.phoneNo
                , $scope.fax, $scope.paymentTerm, $scope.incoterm, $scope.custTyps, $scope.vatNo, $scope.sVatNo, $scope.currency, $scope.country
                , $scope.finalDestination, $scope.continent, $scope.note).then(
                function (response) {
                    if (response.data) {
                        $scope.showSuccess("Save Success");
                        //alert(response.data);
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        $scope.showError(response.data.message);
                        //alert(response.data);
                    }
                   
                    $scope.showError("Save faild");
                    return response;
                }
        );

    }

    $scope.loadIncoterms = function () {
        incotermService.getAll().then(function (response) {
            $scope.incoterms = response.data;

        });
    }
    $scope.loadCustTypes = function () {
        custTypeService.getAll().then(function (response) {
            $scope.custTypes = response.data;
        });
    }
    $scope.loadCurrencies = function () {
        currencyService.getAll().then(function (response) {
            $scope.currencies = response.data;
        });
    }
    $scope.loadCountries = function () {
        countryService.getAll().then(function (response) {
            $scope.countries = response.data;
        });
    }


    $('#customerModal').on('shown.bs.modal', function () {
        $scope.loadIncoterms();
        $scope.loadCustTypes();
        $scope.loadCurrencies();
         $scope.loadCountries();
    })
});
