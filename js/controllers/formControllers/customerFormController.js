
app.controller('customerFormController', function ($scope, $cookies, accountService, appService, customerService) {
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
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
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
                        alert(response.data);
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        alert(response.data);
                    }
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
});
