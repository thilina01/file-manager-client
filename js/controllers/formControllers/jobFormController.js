
app.controller('jobFormController', function ($scope, $cookies, accountService, appService,jobService,itemService,customerService) {
    $scope.job = {};
     $scope.item = {};
      $scope.customer = {};
      
      $scope.items = [];
      $scope.customers = [];
       $scope.loadItem = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
        });
    }
     $scope.loadCustomer = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.job = {};
        $scope.item = {};
      $scope.customer = {};
    }
    $scope.isValid = function () {
        if ($scope.job.jobDate == '' || $scope.job.jobNo == '' || angular.equals($scope.item, {}) == '' || $scope.job.itemType == '' || $scope.job.customer == '' || angular.equals($scope.customer, {}) || $scope.job.itemDescription == '' || $scope.job.jobQty == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
         $scope.job.item = JSON.parse($scope.item);
          $scope.workCenter.customer = JSON.parse($scope.customer);
        jobService.save($scope.job).then(
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
     $('#jobModal').on('shown.bs.modal', function () {
        $scope.loadItems();
    })
     $('#jobModal').on('shown.bs.modal', function () {
        $scope.loadCustomers();
    })
});