
app.controller('jobFormController', function ($scope, $cookies, accountService, appService) {
    $scope.jobDate = '';
    $scope.jobNo = '';
    $scope.productCode = '';

    //auto
    $scope.productType = '';
    $scope.customer = '';
    $scope.customerCode = '';
    $scope.itemDescription = '';
    $scope.jobQty = '';


    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.jobDate = '';
        $scope.jobNo = '';
        $scope.productCode = '';
        $scope.productType = '';
        $scope.customer = '';
        $scope.customerCode = '';
        $scope.itemDescription = '';
        $scope.jobQty = '';
    }
    $scope.isValid = function () {
        if ($scope.jobDate == '' || $scope.jobNo == '' || $scope.productCode == '' || $scope.productType == '' || $scope.customer == '' || $scope.customerCode == '' || $scope.itemDescription == '' || $scope.jobQty == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        jobService.save($scope.jobDate, $scope.jobNo, $scope.productCode, $scope.productType, $scope.customer, $scope.customerCode, $scope.itemDescription, $scope.jobQty).then(
                function (response) {
                    if (response.data) {

                        $scope.showSuccess("saved");
                    }
                    $scope.clear();
                    $scope.reloadApp();
                    return response;
                },
                function (response) {
                    if (response.data) {
                        $scope.showError(response.data.message);
                        return response;
                    }

                    $scope.showError("Unable to save");
                    return response;
                }
        );


    }
});