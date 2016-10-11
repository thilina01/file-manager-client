
app.controller('qualityFormController', function ($scope, $cookies, accountService, appService) {
    $scope.qualityDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.productCode = '';
    $scope.defectCode = '';
    $scope.defectQty = '';
    //auto
    $scope.defectType = '';
    //
    $scope.scrapCode = '';
    $scope.scrapQty = '';
    //auto
    $scope.scraoType = '';
    //
    $scope.lossCode = '';
    $scope.lossQty = '';
    //auto
    $scope.lossReason = '';
    //


});

$scope.clear = function () {
    alert($scope.code + ' ' + $scope.name);
    $scope.qualityDate = '';
    $scope.shift = '';
    $scope.jobNo = '';
    $scope.productCode = '';
    $scope.defectCode = '';
    $scope.defectQty = '';

    $scope.defectType = '';

    $scope.scrapCode = '';
    $scope.scrapQty = '';

    $scope.scraoType = '';

    $scope.lossCode = '';
    $scope.lossQty = '';

    $scope.lossReason = '';


}
