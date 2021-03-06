
app.controller('customerFormController', function ($scope,$timeout, $cookies, accountService, appService, saleTypeService, customerService, incotermService, currencyService, countryService) {
    $scope.customer = {};
    $scope.incoterms = [];
    $scope.saleTypes = [];
    $scope.currencies = [];
    $scope.countries = [];
    $scope.saveButtonText = 'Save';


    $scope.clear = function () {
        $scope.showSuccess("saved");
        $scope.customer = {};
        customerService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }

    $scope.isValid = function () {
        if ($scope.customer.code == '' || $scope.customer.name == '' || $scope.customer.officeAddress == '' || $scope.customer.consignee == ''  || 
                $scope.customer.phoneNo == '' || $scope.customer.fax == '' || $scope.customer.paymentTerm == '' || angular.equals($scope.customer.incoterm, {}) || angular.equals($scope.customer.saleType, {}) || 
                angular.equals($scope.customer.currency, {}) || angular.equals($scope.customer.country, {}) || $scope.customer.finalDestination == '' || $scope.customer.continent == '' ) {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
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
    $scope.loadSaleTypes = function () {
        saleTypeService.getAll().then(function (response) {
            $scope.saleTypes = response.data;
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
        $scope.loadSaleTypes();
        $scope.loadCurrencies();
        $scope.loadCountries();
        $scope.saveButtonText = 'Save';
        if (customerService.toEdit.id !== undefined) {
           $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.customer = customerService.toEdit;
                //alert('$scope.customer.id');
                //alert($scope.customer.id);
            }, 500);
        }
    })
});
