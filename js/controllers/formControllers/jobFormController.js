
app.controller('jobFormController', function ($scope, $timeout, $cookies, accountService, appService, jobService, itemService, jobTypeService) {
    $scope.job = {};

    $scope.items = [];
    $scope.jobTypes = [];
    $scope.saveButtonText = 'Save';

    $scope.loadItems = function () {
        itemService.getAll().then(function (response) {
            $scope.items = response.data;
        });
    }
    
    $scope.loadJobTypes = function () {
        jobTypeService.getAll().then(function (response) {
            $scope.jobTypes = response.data;
        });
    }
    
    $scope.clear = function () {
        // alert($scope.code + ' ' + $scope.name);
        $scope.job = {};
        jobService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }
    
    $scope.isValid = function () {
        $scope.job.jobDate = $('#jobDate').val();
        if ($scope.job.jobDate == '' || $scope.job.jobNo == '' || angular.equals($scope.job.item, {}) || angular.equals($scope.job.customer, {}) || $scope.job.jobQty == '') {
            return false;
        }
        return true;
    }

    $scope.save = function () {
        if (!$scope.isValid()) {
            $scope.showError("form not complete");
            return;
        }
        /*
         $scope.job.item = JSON.parse($scope.item);
         $scope.job.customer = JSON.parse($scope.customer); */
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
    
    $('#jobModal').on('show.bs.modal', function () {
        $scope.loadItems();
        $scope.loadJobTypes();
        $scope.saveButtonText = 'Save';
        if (jobService.toEdit.id != undefined) {
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $scope.job = jobService.toEdit;
            }, 500);
        }

    })
});