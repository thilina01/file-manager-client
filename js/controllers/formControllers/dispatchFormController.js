
app.controller('dispatchFormController', function ($scope, $timeout, dispatchService, appService, customerService, shiftService, jobService) {
    //main
    $scope.dispatch = {};
    $scope.customers = [];
    $scope.jobs = [];



    $scope.saveButtonText = 'Save';

    $scope.jobQuantity = '';

    $scope.loadCustomers = function () {
        customerService.getAll().then(function (response) {
            $scope.customers = response.data;
        });
    }


    $scope.loadJobs = function () {
        jobService.getAll().then(function (response) {
            $scope.jobs = response.data;
        });
    }


    $scope.addjobDispatch = function () {
        if ($scope.dispatch.jobDispatchList == undefined) {
            $scope.dispatch.jobDispatchList = [];
        }
        var jobDispatch = {job: $scope.job, quantity: $scope.dispatchQuantity};
        $scope.dispatch.jobDispatchList.push(jobDispatch);
        $scope.job = {};
        $scope.dispatchQuantity = '';
    };
    $scope.save = function () {

        $scope.dispatch.dispatchDate = $('#dispatchDate').val();
        dispatchService.save($scope.dispatch).then(
                function (response) {
                    if (response.data) {
                        //alert(response.data);
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
                    //$scope.reloadApp();
                    return response;
                }
        );
    }
    $scope.clear = function () {
        $scope.loadCustomers();
        $scope.loadJobs();
        $scope.dispatch = {};
        dispatchService.toEdit = {};
        $scope.saveButtonText = 'Save';
    }

    $('#dispatchModal').on('show.bs.modal', function () {
        $scope.loadCustomers();
        $scope.loadJobs();
        $scope.saveButtonText = 'Save';
        var dispatchId = dispatchService.toEdit.id;
        if (dispatchId != undefined) {
            dispatchService.getToEdit().then(function (response) {
                $scope.dispatch = response.data;
                //console.log($scope.dispatch);
            });
            $timeout(function () {
                $scope.saveButtonText = 'Update';
                $('#dispatchDate').val($scope.dispatch.dispatchDate);
                //$('#dispatchDatetimepicker').setDate($scope.dispatch.dispatchDate);
            }, 1000);

        }
    })
});