
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
});