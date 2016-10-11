
app.controller('lossFormController', function ($scope, $cookies, accountService, appService) {
    $scope.code = '';
    $scope.type = '';
    $scope.typeInShinhala = '';

});

$scope.clear = function () {
    alert($scope.code + ' ' + $scope.name);
    $scope.code = '';
    $scope.type = '';
    $scope.typeInShinhala = '';
}
