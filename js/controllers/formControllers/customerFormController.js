
app.controller('customerFormController', function ($scope, $cookies, accountService, appService, custTypeService, customerService, incotermService, currencyService, countryService) {
    $scope.customer = {};
    $scope.incoterm = {};
    $scope.custType = {};
    $scope.currency = {};
    $scope.country = {};
    $scope.incoterms = [];
    $scope.custTypes = [];
    $scope.currencies = [];
    $scope.countries = [];
    $scope.saveButtonText = 'Save';


    $scope.clear = function () {
        $scope.showSuccess("saved");
        $scope.customer = {};
        $scope.incoterm = {};
        $scope.custType = {};
        $scope.currency = {};
        $scope.country = {};
        customerService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }

    $scope.isValid = function () {
        if ($scope.customer.code == '' || $scope.customer.name == '' || $scope.customer.officeAddress == '' || $scope.customer.consignee == '' || $scope.customer.notifyParty == '' || $scope.customer.contact == '' ||
                $scope.customer.phoneNo == '' || $scope.customer.fax == '' || $scope.customer.paymentTerm == '' || angular.equals($scope.incoterm, {}) || angular.equals($scope.custType, {}) || $scope.customer.vatNo == '' ||
                $scope.customer.sVatNo == '' || angular.equals($scope.currency, {}) || angular.equals($scope.country, {}) || $scope.customer.finalDestination == '' || $scope.customer.continent == '' || $scope.customer.note == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        $scope.customer.incoterm = JSON.parse($scope.incoterm);
        $scope.customer.custType = JSON.parse($scope.custType);
        $scope.customer.currency = JSON.parse($scope.currency);
        $scope.customer.country = JSON.parse($scope.country);
        customerService.save($scope.customer).then(
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
                        $scope.showError(response.data.message);
                        return response;
                    }

                    $scope.showError("Unable to save");
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


    $('#customerModal').on('show.bs.modal', function () {
        $scope.loadIncoterms();
        $scope.loadCustTypes();
        $scope.loadCurrencies();
        $scope.loadCountries();
        $scope.saveButtonText = 'Save';
        if (customerService.toEdit.id !== undefined) {
            $scope.saveButtonText = 'Update';
            $scope.customer = customerService.toEdit;
        }
    })
});
