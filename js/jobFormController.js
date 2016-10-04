
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
});